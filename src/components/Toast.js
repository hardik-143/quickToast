import React, { useEffect, useRef, useState } from "react";
import { COMPONENTS } from "../constants";

export const Toast = ({
  id,
  type = "info",
  text,
  title,
  node,
  duration = 3000,
  alwaysVisible = false,
  close = true,
  progress = false,
  newWindow = false,
  destination = null,
  onDestroy,
  beforeDestination,
  onClick,
  onClose,
  showConfirmButton = false,
  onConfirm,
  confirmButtonText = "Confirm",
  closeAfterOnConfirm = false,
  gravity = "top",
  position = "right",
  rootClass = "",
  escapeMarkup = false,
  ariaLive = "polite",
  style = {},
  stopOnHover = false,
  offset = { x: 0, y: 0 },
  confirmBeforeNav = false,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progressValue, setProgressValue] = useState(100);
  const toastRef = useRef(null);
  const timerRef = useRef(null);
  const progressRAFRef = useRef(null);

  useEffect(() => {
    if (!alwaysVisible && duration > 0) {
      startTimer();
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressRAFRef.current) cancelAnimationFrame(progressRAFRef.current);
    };
  }, []);

  const startTimer = () => {
    const startTime = Date.now();
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, duration - elapsed);
      const percentage = (remaining / duration) * 100;

      setProgressValue(percentage);

      if (percentage > 0) {
        progressRAFRef.current = requestAnimationFrame(updateProgress);
      } else {
        handleDestroy("timeout");
      }
    };

    if (progress) {
      updateProgress();
    }

    timerRef.current = setTimeout(() => {
      handleDestroy("timeout");
    }, duration);
  };

  const handleMouseEnter = () => {
    if (stopOnHover && !alwaysVisible) {
      clearTimeout(timerRef.current);
      cancelAnimationFrame(progressRAFRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (stopOnHover && !alwaysVisible) {
      startTimer();
    }
  };

  const handleDestroy = async (reason = "close") => {
    setIsVisible(false);
    // Wait for animation
    await new Promise((resolve) => setTimeout(resolve, 300));
    onDestroy?.(reason);
  };

  const handleClick = async (event) => {
    if (!destination) {
      onClick?.(event);
      return;
    }

    event.preventDefault();

    if (confirmBeforeNav) {
      const proceed = await (typeof confirmBeforeNav === "function"
        ? confirmBeforeNav(destination, event)
        : window.confirm(`Open ${destination}?`));

      if (!proceed) return;
    }

    if (beforeDestination) {
      const canProceed = await beforeDestination(event);
      if (!canProceed) return;
    }

    handleDestroy("destination");

    if (newWindow) {
      window.open(destination, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = destination;
    }
  };

  const handleConfirm = async () => {
    if (onConfirm) {
      if (closeAfterOnConfirm) {
        onConfirm();
        handleDestroy("confirm");
      } else {
        await onConfirm(() => handleDestroy("confirm"));
      }
    }
  };

  const classes = [
    "quickToast",
    `quickToast-${type}`,
    `quickToast-${position}`,
    `quickToast-${gravity}`,
    rootClass,
    isVisible ? "show" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={toastRef}
      className={classes}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
      role={destination ? "link" : "alert"}
      aria-live={ariaLive}
      tabIndex={destination ? 0 : undefined}
    >
      {progress && !alwaysVisible && (
        <div
          className="quickToast-progress"
          style={{ transform: `scaleX(${progressValue / 100})` }}
        />
      )}

      <div className="quickToast-inner">
        <div className="quickToast-icon">{COMPONENTS.icons[type]}</div>

        <div className="quickToast-content-wrapper">
          {title && <h3 className="quickToast-title">{title}</h3>}

          <div className="quickToast-content">
            {node ? (
              node
            ) : escapeMarkup ? (
              <div dangerouslySetInnerHTML={{ __html: text }} />
            ) : (
              text
            )}
          </div>

          {showConfirmButton && (
            <div className="quickToast-action-buttons">
              <button
                type="button"
                className="quickToast-confirm-button"
                onClick={handleConfirm}
              >
                {confirmButtonText}
              </button>
            </div>
          )}
        </div>

        {close && (
          <button
            type="button"
            className="quickToast-close"
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              if (onClose) {
                Promise.resolve(onClose(e))
                  .then((shouldClose) => {
                    if (shouldClose !== false && !e.defaultPrevented) {
                      handleDestroy("close");
                    }
                  })
                  .catch(console.error);
              } else {
                handleDestroy("close");
              }
            }}
          >
            {COMPONENTS.icons.close}
          </button>
        )}
      </div>
    </div>
  );
};
