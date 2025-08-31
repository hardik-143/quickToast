import React, { createContext, useContext, useCallback, useRef } from "react";
import { CONFIG, COMPONENTS } from "../constants";
import { Toast } from "../components/Toast";

const QuickToastContext = createContext(null);

export const QuickToastProvider = ({ children }) => {
  const toastContainerRef = useRef(null);
  const toastCountRef = useRef(0);

  const showToast = useCallback((options = {}) => {
    const container = toastContainerRef.current;
    if (!container) return;

    const toastId = ++toastCountRef.current;
    const toastOptions = {
      id: toastId,
      ...CONFIG.DEFAULT_OPTIONS,
      ...options,
    };

    const toastElement = document.createElement("div");
    toastElement.dataset.toastId = toastId;

    container.appendChild(toastElement);

    // Render toast component into the container
    ReactDOM.render(
      <Toast
        {...toastOptions}
        onDestroy={() => {
          ReactDOM.unmountComponentAtNode(toastElement);
          toastElement.remove();
        }}
      />,
      toastElement
    );

    return toastId;
  }, []);

  const toast = {
    show: showToast,
    info: (options) => showToast({ ...options, type: "info" }),
    success: (options) => showToast({ ...options, type: "success" }),
    warning: (options) => showToast({ ...options, type: "warning" }),
    error: (options) => showToast({ ...options, type: "error" }),
    danger: (options) => showToast({ ...options, type: "danger" }),
    clear: () => {
      if (toastContainerRef.current) {
        const toasts =
          toastContainerRef.current.querySelectorAll("[data-toast-id]");
        toasts.forEach((toast) => {
          ReactDOM.unmountComponentAtNode(toast);
          toast.remove();
        });
      }
    },
    count: () =>
      toastContainerRef.current?.querySelectorAll("[data-toast-id]").length ||
      0,
  };

  return (
    <QuickToastContext.Provider value={toast}>
      {children}
      <div ref={toastContainerRef} className="quickToast-container" />
    </QuickToastContext.Provider>
  );
};

export const useQuickToast = () => {
  const context = useContext(QuickToastContext);
  if (!context) {
    throw new Error("useQuickToast must be used within a QuickToastProvider");
  }
  return context;
};
