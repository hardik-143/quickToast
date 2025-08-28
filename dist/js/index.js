const __DEFAULT = {
  // id: null, // unique id for the toast
  text: "QuickToast is awesome!", // text to display in the toast
  title: null, // title to display in the toast
  node: null, // node to display in the toast

  duration: 3000, // duration of the toast in milliseconds
  alwaysVisible: false, // always visible

  type: "info", // type of the toast
  stopOnHover: false, // stop timeout on hover
  close: true, // show the close button
  progress: false,

  newWindow: false, // open the destination in a new window
  destination: null, // destination to navigate to when the toast is clicked

  onDestroy: null, // callback function to be called when the toast is removed
  beforeDestination: null, // callback function to be called before the destination is navigated to
  onClick: null, // callback function to be called when the toast is clicked
  onClose: null, // callback function when the close (X) button is clicked (supports async)
  showConfirmButton: false, // show the okay button
  onConfirm: null, // callback function to be called when the okay button is clicked - for action buttons
  confirmButtonText: "Confirm", // text for the okay button
  closeAfterOnConfirm: false, // close the toast after the okay button is clicked

  gravity: "top", // position of the toast - top or bottom
  position: "right", // position of the toast - left or right

  rootClass: "", // additional class names for the root element of the toast

  escapeMarkup: false, // escape markup

  ariaLive: "polite", // aria live

  style: { background: "" }, // style of the toast
  selector: document.body, // selector to display the toast

  offset: { x: 0, y: 0 }, // offset of the toast
  confirmBeforeNav: false, // confirm before navigating (boolean or function)
};

const __VERSION = "1.0.0";

const __AVAILABLE_TYPES = ["info", "success", "danger", "warning", "error"];

const __ICONS = {
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
};

const __CLOSE_ICON = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.0001 3.92452L16.0755 3L10 9.07544L3.9246 3L3 3.92452L9.07548 10L3 16.0755L3.9246 17L10 10.9246L16.0755 17L17.0001 16.0755L10.9246 10L17.0001 3.92452Z" fill="#6A6E73"/>
      </svg>`;

const generateSalt = (length) => {
  let salt = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    salt += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return salt;
};

const apiEncrypt = (input) => {
  try {
    // Base64 encoding
    let encryptedData = btoa(unescape(encodeURIComponent(input)));

    // Custom replacement of '=' with '143'
    encryptedData = encryptedData.replace(/=/g, "143");

    return encryptedData; // Return the encrypted string
  } catch (error) {
    console.error("Encryption failed:", error);
    return null; // Return null in case of an error
  }
};
const isEmpty = function (obj = null) {
  return obj && !Array.isArray(obj) && !Object.keys(obj).length;
};

const makeOptionsObj = (opts) => {
  let dflt = __DEFAULT;
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
      const gravityMap = {
        top: "top",
        t: "top",
        bottom: "bottom",
        b: "bottom",
      };

      if (typeof opts.placement === "string") {
        const val = opts.placement.trim().toLowerCase();
        const [g] = val.split(/[-]/); // take first part before '-'
        if (gravityMap[g]) {
          return gravityMap[g];
        }
      }

      // fallback to explicit gravity or default
      if (opts.gravity === "bottom") return "bottom";
      if (opts.gravity === "top") return "top";
      return dflt.gravity;
    })(), // Vertical Positioning

    position: (function resolvePosition() {
      const positionMap = {
        left: "left",
        l: "left",
        center: "center",
        c: "center",
        right: "right",
        r: "right",
      };

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

      // fallback to explicit position or default
      return opts.position || dflt.position;
    })(), // Position of the toast
    rootClass: opts.rootClass || dflt.rootClass, // Additional class names for the root element of the toast

    stopOnHover: opts.stopOnHover ?? dflt.stopOnHover, // Pause auto-dismiss on hover

    escapeMarkup: opts.escapeMarkup ?? dflt.escapeMarkup,
    ariaLive: opts.ariaLive || dflt.ariaLive,

    alwaysVisible: opts.alwaysVisible ?? dflt.alwaysVisible,
    style: opts.style || dflt.style,
    type:
      opts.type && __AVAILABLE_TYPES.includes(opts.type.toLowerCase())
        ? opts.type.toLowerCase()
        : dflt.type, // Type of the toast

    onClick: opts.onClick || dflt.onClick,

    onConfirm: opts.onConfirm || dflt.onConfirm,
    confirmButtonText: opts.confirmButtonText || dflt.confirmButtonText,
    showConfirmButton: opts.showConfirmButton ?? dflt.showConfirmButton,
    closeAfterOnConfirm: opts.closeAfterOnConfirm ?? dflt.closeAfterOnConfirm,

    progress: opts.progress ?? dflt.progress,
  };

  options.duration = options.alwaysVisible ? 0 : opts.duration ?? dflt.duration;

  return options;
};

const validateOptions = (opts) => {
  if (isEmpty(opts ?? {})) {
    console.warn(
      "Invalid or empty options received:",
      opts,
      "→ Using default options instead."
    );
    return __DEFAULT; // Assign default options
  }
  return makeOptionsObj(opts); // Creating the options object
};

// const generateUniqueID = (id, text) => {
//   return id || apiEncrypt(text.toLowerCase().replace(/\s+/g, "-"));
// };

// Helper function to get offset.
const getAxisOffsetAValue = (axis, options) => {
  if (options.offset[axis]) {
    if (isNaN(options.offset[axis])) {
      return options.offset[axis];
    } else {
      return options.offset[axis] + "px";
    }
  }

  return "0px";
};

const containsClass = (elem, yourClass) => {
  if (!elem || typeof yourClass !== "string") {
    return false;
  } else if (
    elem.className &&
    elem.className.trim().split(/\s+/gi).indexOf(yourClass) > -1
  ) {
    return true;
  } else {
    return false;
  }
};

const emitGlobal = (payload) => {
  try {
    document.dispatchEvent(
      new CustomEvent("quickToast:destroy", { detail: payload })
    );
  } catch (_) {}

  if (payload && payload.reason === "timeout") {
    const { reason, ...rest } = payload; // destructure to omit reason

    try {
      document.dispatchEvent(
        new CustomEvent("quickToast:timeout", { detail: rest })
      );
    } catch (_) {}
  }
};

// Emit active toast count changes
const emitCountChange = () => {
  try {
    const active = document.querySelectorAll(".quickToast").length;
    document.dispatchEvent(
      new CustomEvent("quickToast:count-change", { detail: { active } })
    );
  } catch (_) {}
};

(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.QuickToast = factory();
  }
})(this, function (global) {
  // Object initialization
  var QuickToast = function (options) {
    // Returning a new init object
    return new QuickToast.lib.init(options);
  };
  // Library version
  // version = __VERSION;

  // Set the default global options
  // QuickToast.defaults = __DEFAULT;
  // QuickToast.availableTypes = __AVAILABLE_TYPES;

  function buildDestroyPayload(reason) {
    return {
      type: this.options.type,
      reason, // "quickToast-remove" | "close_click" | "dismiss_click" | "confirm_click" | "destination" | "timeout" | "api_hide" | "clear_toast"
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

  // Defining the prototype of the object
  QuickToast.lib = QuickToast.prototype = {
    quickToast: __VERSION,

    constructor: QuickToast,

    // Initializing the object with required parameters
    init: function (options) {
      let opts = options ?? {};

      // Verifying and validating the input object
      this.options = validateOptions(opts);
    },

    /**
     * Builds the toast DOM element.
     * @returns {HTMLElement} The toast element.
     */
    buildToast: function () {
      // TOAST ELEMENT
      var quickToastElement = document.createElement("div");
      quickToastElement.className = "quickToast " + this.options.rootClass;
      var OPTION_TYPE =
        this.options.type == "error" ? "danger" : this.options.type;
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
      quickToastIconElement.innerHTML = __ICONS[OPTION_TYPE];

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
      if (
        this.options.node &&
        this.options.node.nodeType === Node.ELEMENT_NODE
      ) {
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
        closeElement.innerHTML = __CLOSE_ICON;

        // Triggering the removal of toast from DOM on close click
        closeElement.addEventListener(
          "click",
          function (event) {
            event.stopPropagation();
            const proceed = () => {
              this.removeElement(this.toastElement, "close_click");
              clearTimeout(this.toastElement.timeOutValue);
            };
            try {
              if (typeof this.options.onClose === "function") {
                const ret = this.options.onClose(event);
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
                proceed =
                  ret && typeof ret.then === "function" ? await ret : ret;
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
        if (
          this.options.onClick &&
          typeof this.options.onClick === "function"
        ) {
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
        var x = getAxisOffsetAValue("x", this.options);
        var y = getAxisOffsetAValue("y", this.options);
        var xOffset = this.options.position == "left" ? x : "-" + x;
        var yOffset = this.options.gravity == "quickToast-top" ? y : "-" + y;

        quickToastElement.style.transform =
          "translate(" + xOffset + "," + yOffset + ")";
      }

      // Returning the generated element
      return quickToastElement;
    },

    notify: function () {
      // MAKING DOM
      this.toastElement = this.buildToast();

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
      emitCountChange();

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
    },

    updateProgress: function () {
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
        this.progressRAF = requestAnimationFrame(
          this.updateProgress.bind(this)
        );
      }
    },

    startTimer: function (duration) {
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
    },

    hideToast: function () {
      if (this.toastElement.timeOutValue) {
        clearTimeout(this.toastElement.timeOutValue);
      }
      this.removeElement(this.toastElement, "api_hide");
    },

    // Removing the element from the DOM
    removeElement: function (toastElement, reason = "timeout") {
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
          const payload = buildDestroyPayload.call(this, reason);

          try {
            const ret =
              this.options.onDestroy &&
              typeof this.options.onDestroy === "function" &&
              this.options.onDestroy(payload);
            if (ret && typeof ret.then === "function") ret.catch(console.error);
          } catch (err) {
            console.error("onDestroy error:", err);
          }
          emitGlobal(payload);
          // Notify listeners that the count changed after removal
          emitCountChange();

          this.reposition();
        }.bind(this),
        400
      ); // Binding `this` for function invocation
    },

    // Positioning the toasts on the DOM
    reposition: function () {
      // Top margins with gravity
      var topLeftOffsetSize = {
        top: 65,
        bottom: 15,
      };
      var topRightOffsetSize = {
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
        if (containsClass(allToasts[i], "quickToast-top") === true) {
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
          if (containsClass(allToasts[i], "quickToast-left") === true) {
            // Setting the position
            allToasts[i].style[classUsed] = topLeftOffsetSize[classUsed] + "px";

            topLeftOffsetSize[classUsed] += height + offset;
          } else {
            // Setting the position
            allToasts[i].style[classUsed] =
              topRightOffsetSize[classUsed] + "px";

            topRightOffsetSize[classUsed] += height + offset;
          }
        }
      }
    },
    clear: function () {
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
    },
  };

  // Setting up the prototype for the init object
  QuickToast.lib.init.prototype = QuickToast.lib;

  // Console utility methods for easier debugging and testing
  (QuickToast.info = function (options = {}) {
    return QuickToast({ type: "info", ...options }).notify();
  }),
    (QuickToast.success = function (options = {}) {
      return QuickToast({ type: "success", ...options }).notify();
    }),
    (QuickToast.warning = function (options = {}) {
      return QuickToast({ type: "warning", ...options }).notify();
    }),
    (QuickToast.error = function (options = {}) {
      return QuickToast({ type: "danger", ...options }).notify();
    }),
    (QuickToast.danger = function (options = {}) {
      return QuickToast({ type: "danger", ...options }).notify();
    }),
    (QuickToast.demo = function () {
      QuickToast.info({ text: "This is an info message" });
      setTimeout(
        () => QuickToast.success({ text: "This is a success message" }),
        500
      );
      setTimeout(
        () => QuickToast.warning({ text: "This is a warning message" }),
        1000
      );
      setTimeout(
        () => QuickToast.error({ text: "This is an error message" }),
        1500
      );
    }),
    (QuickToast.clear = function () {
      const toasts = document.querySelectorAll(".quickToast");
      toasts.forEach((toast) => {
        toast.dispatchEvent(new Event("quickToast-remove"));
      });
    }),
    (QuickToast.count = function () {
      return document.querySelectorAll(".quickToast").length;
    });
  // Make QuickToast available globally for console access
  if (typeof window !== "undefined") {
    window.QuickToast = QuickToast;
    // Also expose console utilities directly
    // window.toast = QuickToast;
  }

  // Returning the QuickToast function to be assigned to the window object/module
  return QuickToast;
});
