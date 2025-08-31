// Constants
const __CONFIG = {
  VERSION: "1.0.0",
  AVAILABLE_TYPES: ["info", "success", "danger", "warning", "error"],
  DEFAULT_OPTIONS: {
    text: "QuickToast is awesome!",
    title: null,
    node: null,
    duration: 3000,
    alwaysVisible: false,
    type: "info",
    stopOnHover: false,
    close: true,
    progress: false,
    newWindow: false,
    destination: null,
    onDestroy: null,
    beforeDestination: null,
    onClick: null,
    onClose: null,
    showConfirmButton: false,
    onConfirm: null,
    confirmButtonText: "Confirm",
    closeAfterOnConfirm: false,
    gravity: "top",
    position: "right",
    rootClass: "",
    escapeMarkup: false,
    ariaLive: "polite",
    style: { background: "" },
    selector: document.body,
    offset: { x: 0, y: 0 },
    confirmBeforeNav: false,
  },
};

// Components
const __COMPONENTS = {
  icons: {
    success: `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-svg">
      <path d="M20 10C20 15.5229 15.5229 20 10 20C4.47714 20 0 15.5229 0 10C0 4.47714 4.47714 0 10 0C15.5229 0 20 4.47714 20 10ZM8.84331 15.2949L16.2627 7.87556C16.5146 7.62363 16.5146 7.21512 16.2627 6.96319L15.3503 6.05081C15.0983 5.79883 14.6898 5.79883 14.4379 6.05081L8.3871 12.1015L5.56214 9.27657C5.3102 9.02464 4.90169 9.02464 4.64972 9.27657L3.73734 10.189C3.4854 10.4409 3.4854 10.8494 3.73734 11.1013L7.93089 15.2949C8.18286 15.5469 8.59133 15.5469 8.84331 15.2949Z" fill="currentColor"/>
    </svg>
    `,
    danger: `
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-svg">
      <path d="M20 10.5C20 16.0241 15.5225 20.5 10 20.5C4.47754 20.5 0 16.0241 0 10.5C0 4.97915 4.47754 0.5 10 0.5C15.5225 0.5 20 4.97915 20 10.5ZM10 12.5161C8.97561 12.5161 8.14516 13.3466 8.14516 14.371C8.14516 15.3954 8.97561 16.2258 10 16.2258C11.0244 16.2258 11.8548 15.3954 11.8548 14.371C11.8548 13.3466 11.0244 12.5161 10 12.5161ZM8.23899 5.84895L8.5381 11.3328C8.5521 11.5894 8.76427 11.7903 9.02125 11.7903H10.9788C11.2357 11.7903 11.4479 11.5894 11.4619 11.3328L11.761 5.84895C11.7761 5.57177 11.5554 5.33871 11.2779 5.33871H8.7221C8.44452 5.33871 8.22387 5.57177 8.23899 5.84895Z" fill="currentColor"/>
    </svg>
    `,
    warning: `
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-svg">
      <path d="M2.57815 19H17.4223C18.9402 19 19.8864 17.3307 19.1275 16.0013L11.7054 2.99706C10.9464 1.66765 9.05397 1.66765 8.29501 2.99706L0.87295 16.0013C0.113988 17.3307 1.06023 19 2.57815 19ZM10.0002 12.0031C9.45809 12.0031 9.01454 11.5533 9.01454 11.0035V9.00441C9.01454 8.45465 9.45809 8.00485 10.0002 8.00485C10.5423 8.00485 10.9859 8.45465 10.9859 9.00441V11.0035C10.9859 11.5533 10.5423 12.0031 10.0002 12.0031ZM10.9859 16.0013H9.01454V14.0022H10.9859V16.0013Z" fill="currentColor"/>
    </svg>    
    `,
    info: `
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-svg">
      <path d="M0 10.5C0 4.9759 4.4775 0.5 10 0.5C15.5225 0.5 20 4.9759 20 10.5C20 16.0209 15.5225 20.5 10 20.5C4.4775 20.5 0 16.0209 0 10.5ZM10 8.4839C11.0244 8.4839 11.8548 7.6534 11.8548 6.629C11.8548 5.6046 11.0244 4.7742 10 4.7742C8.9756 4.7742 8.1452 5.6046 8.1452 6.629C8.1452 7.6534 8.9756 8.4839 10 8.4839ZM11.761 15.1511L11.4619 9.6672C11.4479 9.4106 11.2357 9.2097 10.9788 9.2097H9.0212C8.7643 9.2097 8.5521 9.4106 8.5381 9.6672L8.239 15.1511C8.2239 15.4282 8.4446 15.6613 8.7221 15.6613L11.2779 15.6613C11.5555 15.6613 11.7761 15.4282 11.761 15.1511Z" fill="currentColor"/>
    </svg>
    `,
    error: `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" class="icon-svg">
<path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z" fill="currentColor"/>
</svg>`,
    close: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.0001 3.92452L16.0755 3L10 9.07544L3.9246 3L3 3.92452L9.07548 10L3 16.0755L3.9246 17L10 10.9246L16.0755 17L17.0001 16.0755L10.9246 10L17.0001 3.92452Z" fill="#6A6E73"/>
      </svg>`,
  },

  createElement(tag, className = "", props = {}) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    Object.entries(props).forEach(([key, value]) => {
      if (key === "innerHTML") {
        element.innerHTML = value;
      } else {
        element.setAttribute(key, value);
      }
    });
    return element;
  },
};

// Utils
const __UTILS = {
  isEmpty(obj) {
    return obj && !Array.isArray(obj) && !Object.keys(obj).length;
  },

  getAxisOffset(axis, options) {
    const offset = options.offset[axis];
    return offset ? (isNaN(offset) ? offset : `${offset}px`) : "0px";
  },

  containsClass(elem, className) {
    return elem?.className?.trim().split(/\s+/gi).includes(className) || false;
  },

  emitEvent(eventName, detail = {}) {
    try {
      document.dispatchEvent(new CustomEvent(eventName, { detail }));
    } catch (error) {
      console.warn(`Event emission failed for ${eventName}:`, error);
    }
  },
};

// Add this near the top of the file with other utility functions
const __EVENT_HANDLERS = {
  emitGlobal(payload) {
    try {
      document.dispatchEvent(
        new CustomEvent("quickToast:destroy", { detail: payload })
      );

      if (payload && payload.reason === "timeout") {
        const { reason, ...rest } = payload;
        document.dispatchEvent(
          new CustomEvent("quickToast:timeout", { detail: rest })
        );
      }
    } catch (_) {}
  },

  emitCountChange() {
    try {
      const active = document.querySelectorAll(".quickToast").length;
      document.dispatchEvent(
        new CustomEvent("quickToast:count-change", { detail: { active } })
      );
    } catch (_) {}
  },
};

// Toast Factory
class ToastFactory {
  constructor(options = {}) {
    this.options = this.validateOptions(options);
    this.toastElement = null;
    this.progressRAF = null;
    this.initialStartTime = null;
    this.remainingTime = 0;
  }

  validateOptions(opts) {
    if (__UTILS.isEmpty(opts)) {
      console.warn("Invalid options, using defaults");
      return __CONFIG.DEFAULT_OPTIONS;
    }
    return this.makeOptionsObj(opts);
  }

  makeOptionsObj(opts) {
    let dflt = __CONFIG.DEFAULT_OPTIONS;
    let options = {
      // id: opts.id || dflt.id,

      title: opts.title || dflt.title, // Display title

      text: opts.text || dflt.text, // Display message
      node: opts.node || dflt.node, // Display content as node
      selector: opts.selector || dflt.selector, // Parent selector
      onDestroy: opts.onDestroy || dflt.onDestroy, // Callback after Toast Removal

      destination: opts.destination || dflt.destination, // On-click destination
      beforeDestination: opts.beforeDestination || dflt.beforeDestination,
      newWindow: opts.newWindow || dflt.newWindow, // Open destination in new window
      confirmBeforeNav: opts.confirmBeforeNav || dflt.confirmBeforeNav, //

      close: opts.close ?? dflt.close,
      onClose: opts.onClose || dflt.onClose,

      // placement → gravity/position resolution
      gravity: (function resolveGravity() {
        const gravityFullValues = {
          top: "top",
          bottom: "bottom",
        };
        const gravityMap = {
          ...gravityFullValues,
          t: "top",
          b: "bottom",
        };

        // Explicit gravity takes precedence over placement
        if (opts.gravity && gravityMap[opts.gravity]) {
          return gravityMap[opts.gravity];
        }

        // Fallback to placement if no explicit gravity
        if (typeof opts.placement === "string") {
          const val = opts.placement.trim().toLowerCase();

          // support shorthand like "tl", "t-l", etc.
          if (/^(t|b)(l|c|r)$/.test(val)) {
            const [g] = val.split("");
            return gravityMap[g];
          }

          // support full "top-left", "bottom-right" etc.
          const parts = val.split("-");
          if (parts.length === 2 && gravityMap[parts[0]]) {
            return gravityMap[parts[0]];
          }
        }

        return dflt.gravity;
      })(), // Vertical Positioning

      position: (function resolvePosition() {
        const positionFullValues = {
          left: "left",
          center: "center",
          right: "right",
        };
        const positionMap = {
          ...positionFullValues,
          l: "left",
          c: "center",
          r: "right",
        };

        // Explicit position takes precedence over placement
        if (opts.position && positionMap[opts.position]) {
          return positionMap[opts.position];
        }

        // Fallback to placement if no explicit position
        if (typeof opts.placement === "string") {
          const val = opts.placement.trim().toLowerCase();

          // support shorthand like "tl", "br", etc.
          if (/^(t|b)(l|c|r)$/.test(val)) {
            const [, pos] = val.split("");

            return positionMap[pos];
          }

          // support full "top-left", "bottom-right" etc.
          const parts = val.split("-");
          if (parts.length === 2 && positionMap[parts[1]]) {
            return positionMap[parts[1]];
          }
        }

        return dflt.position;
      })(), // Position of the toast
      rootClass: opts.rootClass || dflt.rootClass, // Additional class names for the root element of the toast

      stopOnHover: opts.stopOnHover ?? dflt.stopOnHover, // Pause auto-dismiss on hover

      escapeMarkup: opts.escapeMarkup ?? dflt.escapeMarkup,
      ariaLive: opts.ariaLive || dflt.ariaLive,

      alwaysVisible: opts.alwaysVisible ?? dflt.alwaysVisible,
      style: opts.style || dflt.style,
      type:
        opts.type && __CONFIG.AVAILABLE_TYPES.includes(opts.type.toLowerCase())
          ? opts.type.toLowerCase()
          : dflt.type, // Type of the toast

      onClick: opts.onClick || dflt.onClick,

      onConfirm: opts.onConfirm || dflt.onConfirm,
      confirmButtonText: opts.confirmButtonText || dflt.confirmButtonText,
      showConfirmButton: opts.showConfirmButton ?? dflt.showConfirmButton,
      closeAfterOnConfirm: opts.closeAfterOnConfirm ?? dflt.closeAfterOnConfirm,

      progress: opts.progress ?? dflt.progress,
    };

    options.duration = options.alwaysVisible
      ? 0
      : opts.duration ?? dflt.duration;

    return options;
  }

  buildDestroyPayload(reason) {
    return {
      type: this.options.type,
      reason,
      lifetimeMs: Date.now() - (this.initialStartTime ?? Date.now()),
      remainingToasts: Math.max(
        0,
        document.querySelectorAll(".quickToast").length - 1
      ),
      ...(this.options?.title &&
        !this.options?.node && { title: this.options.title }),
      ...(this.options?.node && { node: this.options.node }),
      ...(this.options?.text && { text: this.options.text }),
    };
  }

  build() {
    // TOAST ELEMENT
    var quickToastElement = document.createElement("div");
    quickToastElement.className = "quickToast " + this.options.rootClass;
    var OPTION_TYPE = this.options.type;
    // CLASSES FOR TOAST TYPE, POSITION AND GRAVITY
    quickToastElement.className += " quickToast-" + OPTION_TYPE; // Assigningn type of toast
    quickToastElement.className += " quickToast-" + this.options.position; // Assigning position to the toast [Right | Left]
    quickToastElement.className += " quickToast-" + this.options.gravity; // Assigning gravity of element [Top | Bottom]

    // CUSTOM STYLES
    for (var property in this.options.style) {
      quickToastElement.style[property] = this.options.style[property];
    }

    // ANNOUNCING TOAST
    if (this.options.ariaLive) {
      quickToastElement.setAttribute("aria-live", this.options.ariaLive);
    }

    // PROGRESS BAR
    if (!this.options.alwaysVisible && this.options.progress) {
      const quickToastProgressBar = document.createElement("div");
      quickToastProgressBar.className = "quickToast-progress";
      quickToastElement.appendChild(quickToastProgressBar);
      this.quickToastProgressBar = quickToastProgressBar;
    }

    // TOAST INNER
    let quickToastInnerElement = document.createElement("div");
    quickToastInnerElement.className = "quickToast-inner";
    quickToastElement.appendChild(quickToastInnerElement);

    // TOAST ICON
    let quickToastIconElement = document.createElement("div");
    quickToastIconElement.className = "quickToast-icon";
    quickToastIconElement.innerHTML = __COMPONENTS.icons[OPTION_TYPE];

    // TOAST CONTENT WRAPPER
    let quickToastContentWrapperElement = document.createElement("div");
    quickToastContentWrapperElement.className = "quickToast-content-wrapper";

    // TITLE IF PRESENT
    if (this.options.title) {
      let quickToastTitleElement = document.createElement("h3");
      quickToastTitleElement.className = "quickToast-title";
      quickToastTitleElement.innerHTML = this.options.title;
      quickToastContentWrapperElement.appendChild(quickToastTitleElement);
    }

    // TOAST CONTENT
    let quickToastContentElement = document.createElement("div");
    quickToastContentElement.className = "quickToast-content";

    // TOAST MESSAGE/NODE
    if (this.options.node && this.options.node.nodeType === Node.ELEMENT_NODE) {
      let clonedNode = this.options.node.cloneNode(true); // true = deep clone
      quickToastContentElement.appendChild(clonedNode);
    } else {
      if (this.options.escapeMarkup) {
        quickToastContentElement.innerHTML = this.options.text;
      } else {
        quickToastContentElement.innerText = this.options.text;
      }
    }

    quickToastContentWrapperElement.appendChild(quickToastContentElement);

    // TOAST ACTION BUTTONS
    // OKAY BUTTON IF showConfirmButton IS TRUE
    let quickToastActionButtonsElement = document.createElement("div");
    quickToastActionButtonsElement.className = "quickToast-action-buttons";
    if (this.options.showConfirmButton) {
      let confirmButton = document.createElement("button");
      confirmButton.type = "button";
      confirmButton.className = "quickToast-confirm-button";
      confirmButton.setAttribute("data-confirm-click", "true");
      confirmButton.innerHTML = this.options.confirmButtonText;

      quickToastActionButtonsElement.appendChild(confirmButton);
      quickToastContentWrapperElement.appendChild(
        quickToastActionButtonsElement
      );
    }

    // let id = generateUniqueID(
    //   this.options.id,
    //   quickToastContentElement.textContent
    // );

    // if (this.options.id) {
    //   quickToastElement.setAttribute("data-id", id);
    // }

    // if (
    //   document.querySelectorAll('[data-id="' + this.options.id + '"]')
    //     .length > 0
    // ) {
    //   console.warn("Toast with this configuration already exists");
    //   // this.preventNullElementError = true;
    //   return null;
    // }

    quickToastInnerElement.appendChild(quickToastIconElement);
    quickToastInnerElement.appendChild(quickToastContentWrapperElement);

    // CLOSE BUTTON IF close is true
    if (this.options.close === true) {
      // Create a span for close element
      var closeElement = document.createElement("button");
      closeElement.type = "button";
      closeElement.setAttribute("aria-label", "Close");
      closeElement.className = "quickToast-close";
      closeElement.innerHTML = __COMPONENTS.icons.close;

      // Triggering the removal of toast from DOM on close click
      closeElement.addEventListener(
        "click",
        function (event) {
          event.stopPropagation();
          const proceed = () => {
            this.removeElement(this.toastElement, "close_click");
            clearTimeout(this.toastElement.timeOutValue);
          };
          let ret;
          try {
            if (typeof this.options.onClose === "function") {
              ret = this.options.onClose(event);
              if (ret && typeof ret.then === "function") {
                ret
                  .then((val) => {
                    if (val === false || event.defaultPrevented) return; // cancel close
                    proceed();
                  })
                  .catch((e) => {
                    console.error("onClose error:", e);
                    if (event.defaultPrevented) return; // honor preventDefault even on error
                    proceed();
                  });
              } else {
                if (ret === false || event.defaultPrevented) return; // cancel close
                proceed();
              }
            } else {
              proceed();
            }
          } catch (err) {
            console.error("onClose error:", err);
            if (event.defaultPrevented) return; // honor preventDefault even on error
            proceed();
          }
        }.bind(this)
      );
      quickToastInnerElement.appendChild(closeElement);
    }

    if (
      this.options.stopOnHover &&
      !this.options.alwaysVisible &&
      this.options.duration > 0
    ) {
      // stop countdown
      quickToastElement.addEventListener(
        "mouseenter",
        function (event) {
          clearTimeout(this.toastElement.timeOutValue);
          cancelAnimationFrame(this.progressRAF);
          const elapsedTime = Date.now() - this.startTime;
          this.remainingTime -= elapsedTime;
          try {
            document.dispatchEvent(
              new CustomEvent("quickToast:pause", {
                detail: {
                  remainingMs: this.remainingTime,
                  durationMs: this.options.duration,
                },
              })
            );
          } catch (_) {}
        }.bind(this)
      );
      // add back the timeout
      quickToastElement.addEventListener(
        "mouseleave",
        function () {
          if (this.remainingTime > 0) {
            this.startTimer(this.remainingTime);
          }
          try {
            document.dispatchEvent(
              new CustomEvent("quickToast:resume", {
                detail: {
                  remainingMs: this.remainingTime,
                  durationMs: this.options.duration,
                },
              })
            );
          } catch (_) {}
        }.bind(this)
      );
    }

    /**
     * Listen for a programmatic removal request.
     * When the custom "quickToast-remove" event is dispatched on this toast,
     * remove it without re-triggering any chain removal events.
     * The second argument `true` tells removeElement to suppress emitting
     * any additional remove-all notifications.
     */
    quickToastElement.addEventListener("quickToast-remove", () => {
      this.removeElement(quickToastElement, "quickToast-remove");
    });

    // CLOSE TOAST VIA CUSTOM ATTRIBUTE ADDED IN NODE
    let dismissSelfBtn = quickToastElement.querySelector(
      '[data-dismiss-self="true"]'
    );
    if (dismissSelfBtn) {
      quickToastElement
        .querySelector('[data-dismiss-self="true"]')
        .addEventListener(
          "click",
          function (event) {
            event.stopPropagation();
            this.removeElement(this.toastElement, "dismiss_click");
            clearTimeout(this.toastElement.timeOutValue);
          }.bind(this)
        );
    }

    // CUSTOM OKAY BUTTON HANDLE
    // will work with libraries okay button and with custom button added via NODE
    let confirmClickBtn = quickToastElement.querySelector(
      '[data-confirm-click="true"]'
    );
    if (confirmClickBtn) {
      confirmClickBtn.addEventListener(
        "click",
        function (event) {
          event.stopPropagation();
          const callback = () => {
            this.options.alwaysVisible = false;
            this.removeElement(this.toastElement, "confirm_click");
            clearTimeout(this.toastElement.timeOutValue);
          };
          if (typeof this.options.onConfirm === "function") {
            if (this.options.closeAfterOnConfirm) {
              this.options.onConfirm();
              callback();
            } else {
              this.options.onConfirm(callback);
            }
          }
        }.bind(this)
      );
    }

    // ADDING AN DESTINATION PATH AND onClick HANDLER
    if (
      this.options.destination &&
      typeof this.options.destination === "string"
    ) {
      // Add aria-label with destination hostname for screen readers
      try {
        const url = new URL(this.options.destination, window.location.href);
        quickToastElement.setAttribute(
          "aria-label",
          `Open link to ${url.hostname}`
        );
        quickToastElement.setAttribute("role", "link");
        quickToastElement.setAttribute("tabindex", "0");
      } catch (_) {}

      // Debounce navigation clicks
      this._navInProgress = false;

      quickToastElement.addEventListener(
        "click",
        async function (event) {
          event.stopPropagation();
          if (this._navInProgress) return;
          this._navInProgress = true;

          //     Optional confirmation (boolean or function)
          try {
            let proceed = true;
            const c = this.options.confirmBeforeNav;
            if (c === true) {
              proceed = window.confirm(`Open ${this.options.destination}?`);
            } else if (typeof c === "function") {
              const ret = c(this.options.destination, event);
              proceed = ret && typeof ret.then === "function" ? await ret : ret;
            }
            if (proceed === false) {
              this._navInProgress = false;
              return;
            }
          } catch (_) {
            this._navInProgress = false;
            return;
          }

          // beforeDestination can be async; cancel on false/throw
          try {
            if (
              this.options.beforeDestination &&
              typeof this.options.beforeDestination === "function"
            ) {
              const ret = this.options.beforeDestination(event);
              const ok =
                ret && typeof ret.then === "function" ? await ret : ret;
              if (ok === false) {
                this._navInProgress = false;
                return;
              }
            }
          } catch (_) {
            this._navInProgress = false;
            return;
          }

          this.options.alwaysVisible = false;
          this.removeElement(this.toastElement, "destination");
          if (this.options.newWindow === true) {
            window.open(
              this.options.destination,
              "_blank",
              "noopener,noreferrer"
            );
          } else {
            window.location = this.options.destination;
          }
        }.bind(this)
      );

      // Keyboard activation (Enter/Space)
      quickToastElement.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          quickToastElement.click();
        }
      });
    } else {
      if (this.options.onClick && typeof this.options.onClick === "function") {
        quickToastElement.addEventListener(
          "click",
          function (event) {
            event.stopPropagation();
            this.options.onClick();
          }.bind(this)
        );
      }
    }

    // ADDING OFFSET
    if (typeof this.options.offset === "object") {
      var x = __UTILS.getAxisOffset("x", this.options);
      var y = __UTILS.getAxisOffset("y", this.options);
      var xOffset = this.options.position == "left" ? x : "-" + x;
      var yOffset = this.options.gravity == "quickToast-top" ? y : "-" + y;

      quickToastElement.style.transform =
        "translate(" + xOffset + "," + yOffset + ")";
    }

    // Returning the generated element
    return quickToastElement;
  }

  notify() {
    // MAKING DOM
    this.toastElement = this.build();

    if (this.toastElement === null) {
      console.error(
        "Failed to create toast element \n Please check your options"
      );
      return;
    }

    // GETTING ELEMENT TO ADD TOASTIFY
    var rootElement;
    if (typeof this.options.selector === "string") {
      if (
        document.body.contains(document.querySelector(this.options.selector))
      ) {
        rootElement = document.querySelector(this.options.selector);
      } else {
        console.error(
          "given selector is not in the DOM \n Adding toast to body",
          this.options.selector
        );
        rootElement = document.body;
      }
    } else if (
      this.options.selector instanceof HTMLElement ||
      (typeof ShadowRoot !== "undefined" &&
        this.options.selector instanceof ShadowRoot)
    ) {
      rootElement = this.options.selector;
    } else {
      rootElement = document.body;
    }

    // VALIDATING ROOT ELEMENT
    if (!rootElement) {
      throw "Root element is not defined";
    }

    const showEventDetail = {
      type: this.options.type,
      ...(this.options?.title &&
        !this.options?.node && {
          title: this.options.title,
        }),
      ...(this.options?.node && { node: this.options.node }),
      ...(this.options?.text && { text: this.options.text }),
      toastElement: this.toastElement,
    };
    // Fire show (toast about to get insert into dom)
    try {
      document.dispatchEvent(
        new CustomEvent("quickToast:show", { detail: showEventDetail })
      );
    } catch (_) {}

    // ADDING INTO DOMs
    var elementToInsert = this.options.oldestFirst
      ? rootElement.lastChild
      : rootElement.firstChild;
    rootElement.insertBefore(this.toastElement, elementToInsert);

    // Repositioning the toasts in case multiple toasts are present
    this.reposition();

    // Fire show (toast inserted into dom)
    try {
      document.dispatchEvent(
        new CustomEvent("quickToast:inserted", { detail: showEventDetail })
      );
    } catch (_) {}

    // Notify listeners that the count changed after insertion
    __EVENT_HANDLERS.emitCountChange();

    this.initialStartTime = Date.now();
    // Setting up the timeout for the toast to AUTO REMOVAL
    if (!this.options.alwaysVisible && this.options.duration > 0) {
      this.remainingTime = this.options.duration;
      this.startTimer(this.remainingTime);
    }

    this.toastElement.classList.add("show");

    // get transition duration (in ms)
    const style = window.getComputedStyle(this.toastElement);
    const duration =
      parseFloat(style.transitionDuration || "0") * 1000 + // in seconds → ms
      parseFloat(style.transitionDelay || "0") * 1000; // include delay

    // fallback if no transition set
    const delay = duration > 0 ? duration : 200;

    setTimeout(() => {
      try {
        document.dispatchEvent(
          new CustomEvent("quickToast:shown", { detail: showEventDetail })
        );
      } catch (_) {}
    }, delay);

    // Supporting function chaining
    return this;
  }

  updateProgress() {
    const elapsed = Date.now() - this.startTime;
    // Remaining ratio between 0 and 1
    const remainingMs = Math.max(0, this.remainingTime - elapsed);
    const ratio = Math.max(0, remainingMs / this.options.duration);

    // Apply scaling
    this.quickToastProgressBar.style.transform = `scaleX(${ratio})`;

    // Emit progress updates globally when enabled
    try {
      document.dispatchEvent(
        new CustomEvent("quickToast:progress", {
          detail: {
            ratio,
            remainingMs,
            durationMs: this.options.duration,
          },
        })
      );
    } catch (_) {}

    if (ratio > 0) {
      this.progressRAF = requestAnimationFrame(this.updateProgress.bind(this));
    }
  }

  startTimer(duration) {
    this.startTime = Date.now();

    this.toastElement.timeOutValue = window.setTimeout(
      function () {
        // Remove the toast from DOM
        if (!this.options.alwaysVisible) {
          this.removeElement(this.toastElement, "timeout");
          cancelAnimationFrame(this.progressRAF);
        }
      }.bind(this),
      duration
    ); // Binding `this` for function invocation
    cancelAnimationFrame(this.progressRAF);
    if (!this.options.alwaysVisible && this.options.progress) {
      this.updateProgress();
    }
  }

  dismiss() {
    if (this.toastElement.timeOutValue) {
      clearTimeout(this.toastElement.timeOutValue);
    }
    this.removeElement(this.toastElement, "api_hide");
  }

  // Removing the element from the DOM
  removeElement(toastElement, reason = "timeout") {
    // Hiding the element
    // toastElement.classList.remove("on");
    // Fire hide (start of hide transition)
    try {
      const hidePayload = function () {
        return {
          type: this.options.type,
          reason,
          lifetimeMs: Date.now() - (this.initialStartTime ?? Date.now()),
          remainingToasts: Math.max(
            0,
            document.querySelectorAll(".quickToast").length - 1
          ),
          ...(this.options?.title &&
            !this.options?.node && {
              title: this.options.title,
            }),
          ...(this.options?.node && { node: this.options.node }),
          ...(this.options?.text && { text: this.options.text }),
          toastElement: this.toastElement,
        };
      }.call(this);
      document.dispatchEvent(
        new CustomEvent("quickToast:hide", { detail: hidePayload })
      );
    } catch (_) {}
    toastElement.className = toastElement.className.replace(" show", "");

    /**
     * Trigger event to remove all toast
     * !preventTriggerEvent is used to prevent trigger event when removeElement is called from quickToast-remove-all
     */
    // if (!preventTriggerEvent) {
    //   // $(toastElement).trigger("quickToast-remove-all");
    //   toastElement.dispatchEvent(new CustomEvent("quickToast-remove-all"));
    // }

    // Removing the element from DOM after transition end
    window.setTimeout(
      function () {
        // // remove options node if any
        // if (this.options.node && this.options.node.parentNode) {
        //   this.options.node.parentNode.removeChild(this.options.node);
        // }

        // Remove the element from the DOM, only when the parent node was not removed before.
        if (toastElement.parentNode) {
          toastElement.parentNode.removeChild(toastElement);
        }
        const payload = this.buildDestroyPayload.call(this, reason);

        try {
          const ret =
            this.options.onDestroy &&
            typeof this.options.onDestroy === "function" &&
            this.options.onDestroy(payload);
          if (ret && typeof ret.then === "function") ret.catch(console.error);
        } catch (err) {
          console.error("onDestroy error:", err);
        }
        __EVENT_HANDLERS.emitGlobal(payload);
        // Notify listeners that the count changed after removal
        __EVENT_HANDLERS.emitCountChange();

        this.reposition();
      }.bind(this),
      400
    ); // Binding `this` for function invocation
  }

  // Positioning the toasts on the DOM
  reposition() {
    // Top margins with gravity
    var topLeftOffsetSize = {
      top: 65,
      bottom: 15,
    };
    var topRightOffsetSize = {
      top: 65,
      bottom: 15,
    };
    var topCenterOffsetSize = {
      top: 65,
      bottom: 15,
    };
    var offsetSize = {
      top: 65,
      bottom: 15,
    };

    // Get all toast messages on the DOM
    var allToasts = document.getElementsByClassName("quickToast");

    var classUsed;
    // Modifying the position of each toast element
    for (var i = 0; i < allToasts.length; i++) {
      // Getting the applied gravity
      if (__UTILS.containsClass(allToasts[i], "quickToast-top") === true) {
        classUsed = "quickToast-top";
      } else {
        classUsed = "quickToast-bottom";
      }

      var height = allToasts[i].offsetHeight;

      classUsed = classUsed.replace("quickToast-", "");
      // Spacing between toasts

      var offset = 16;
      var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

      // Show toast in center if screen with less than or equal to 360px
      if (width <= 360) {
        // Setting the position
        allToasts[i].style[classUsed] = offsetSize[classUsed] + "px";

        offsetSize[classUsed] += height + offset;
      } else {
        if (__UTILS.containsClass(allToasts[i], "quickToast-left") === true) {
          // Setting the position
          allToasts[i].style[classUsed] = topLeftOffsetSize[classUsed] + "px";

          topLeftOffsetSize[classUsed] += height + offset;
        } else if (
          __UTILS.containsClass(allToasts[i], "quickToast-center") === true
        ) {
          // Setting the position
          allToasts[i].style[classUsed] = topCenterOffsetSize[classUsed] + "px";

          topCenterOffsetSize[classUsed] += height + offset;
        } else {
          // Setting the position
          allToasts[i].style[classUsed] = topRightOffsetSize[classUsed] + "px";

          topRightOffsetSize[classUsed] += height + offset;
        }
      }
    }
  } // <-- Ensure this closing brace is present to end the reposition() method
  clear() {
    try {
      if (this.toastElement) {
        if (this.toastElement.timeOutValue) {
          clearTimeout(this.toastElement.timeOutValue);
        }
        this.removeElement(this.toastElement, "clear_toast");
      }
    } catch (err) {
      console.error("QuickToast instance clear error:", err);
    }
  }
}

// QuickToast Main
const QuickToast = (options) => new ToastFactory(options);

// Helper Methods
QuickToast.info = (options = {}) =>
  QuickToast({ type: "info", ...options }).notify();
QuickToast.success = (options = {}) =>
  QuickToast({ type: "success", ...options }).notify();
QuickToast.warning = (options = {}) =>
  QuickToast({ type: "warning", ...options }).notify();
QuickToast.error = (options = {}) =>
  QuickToast({ type: "error", ...options }).notify();
QuickToast.danger = (options = {}) =>
  QuickToast({ type: "danger", ...options }).notify();

// Utility Methods
QuickToast.demo = () => {
  const types = ["info", "success", "danger", "warning", "error"];
  types.forEach((type, index) => {
    setTimeout(() => {
      QuickToast[type]({ text: `This is a ${type} message` });
    }, index * 500);
  });
};

QuickToast.clear = () => {
  document.querySelectorAll(".quickToast").forEach((toast) => {
    toast.dispatchEvent(new Event("quickToast-remove"));
  });
};

QuickToast.count = () => document.querySelectorAll(".quickToast").length;

// Module Export
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.QuickToast = factory();
  }
})(typeof self !== "undefined" ? self : this, () => QuickToast);
