/*!
 * docsify-copy-code
 * v2.1.1
 * https://github.com/jperasmus/docsify-copy-code
 * (c) 2017-2020 JP Erasmus <jperasmus11@gmail.com>
 * MIT license
 */
(function () {
  "use strict";
  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj &&
          typeof Symbol === "function" &&
          obj.constructor === Symbol &&
          obj !== Symbol.prototype
          ? "symbol"
          : typeof obj;
      };
    }
    return _typeof(obj);
  }
  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;
    if (!css || typeof document === "undefined") {
      return;
    }
    var head = document.head || document.getElementsByTagName("head")[0];
    var style = document.createElement("style");
    style.type = "text/css";
    if (insertAt === "top") {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }
  // var css =
  //   ".docsify-copy-code-button,.docsify-copy-code-button span{cursor:pointer;transition:all .25s ease}.docsify-copy-code-button{position:absolute;z-index:1;top:0;right:0;overflow:visible;padding:.65em .8em;border:0;border-radius:0;outline:0;font-size:1em;background:grey;background:var(--theme-color,grey);color:#fff;opacity:0}.docsify-copy-code-button span{border-radius:3px;background:inherit;pointer-events:none}.docsify-copy-code-button .error,.docsify-copy-code-button .success{position:absolute;z-index:-100;top:50%;right:0;padding:.5em .65em;font-size:.825em;opacity:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.docsify-copy-code-button.error .error,.docsify-copy-code-button.success .success{right:100%;opacity:1;-webkit-transform:translate(-115%,-50%);transform:translate(-115%,-50%)}.docsify-copy-code-button:focus,pre:hover .docsify-copy-code-button{opacity:1}";
  // styleInject(css);
  function docsifyCopyCode(hook, vm) {
    hook.doneEach(function () {
      var targetElms = Array.apply(
        null,
        document.querySelectorAll("pre[data-lang]")
      );
      var i18n = {
        // buttonText: "Copy to clipboard",
        buttonText: `<svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z" fill="currentColor"></path></svg>`,
        errorText: "Error",
        successText: "Copied",
      };
      if (vm.config.copyCode) {
        Object.keys(i18n).forEach(function (key) {
          var textValue = vm.config.copyCode[key];
          if (typeof textValue === "string") {
            i18n[key] = textValue;
          } else if (_typeof(textValue) === "object") {
            Object.keys(textValue).some(function (match) {
              var isMatch = location.href.indexOf(match) > -1;
              i18n[key] = isMatch ? textValue[match] : i18n[key];
              return isMatch;
            });
          }
        });
      }
      var template = [
        '<button class="docsify-copy-code-button">',
        '<span class="label">'.concat(i18n.buttonText, "</span>"),
        '<span class="error">'.concat(i18n.errorText, "</span>"),
        '<span class="success">'.concat(i18n.successText, "</span>"),
        "</button>",
      ].join("");
      targetElms.forEach(function (elm) {
        elm.insertAdjacentHTML("beforeend", template);
      });
    });
    hook.mounted(function () {
      var listenerHost = document.querySelector(".content");
      listenerHost.addEventListener("click", function (evt) {
        var isCopyCodeButton = evt.target.classList.contains(
          "docsify-copy-code-button"
        );
        if (isCopyCodeButton) {
          var buttonElm =
            evt.target.tagName === "BUTTON"
              ? evt.target
              : evt.target.parentNode;
          var range = document.createRange();
          var preElm = buttonElm.parentNode;
          var codeElm = preElm.querySelector("code");
          var selection = window.getSelection();
          range.selectNode(codeElm);
          selection.removeAllRanges();
          selection.addRange(range);
          try {
            var successful = document.execCommand("copy");
            if (successful) {
              buttonElm.classList.add("success");
              setTimeout(function () {
                buttonElm.classList.remove("success");
              }, 1e3);
            }
          } catch (err) {
            console.error("docsify-copy-code: ".concat(err));
            buttonElm.classList.add("error");
            setTimeout(function () {
              buttonElm.classList.remove("error");
            }, 1e3);
          }
          selection = window.getSelection();
          if (typeof selection.removeRange === "function") {
            selection.removeRange(range);
          } else if (typeof selection.removeAllRanges === "function") {
            selection.removeAllRanges();
          }
        }
      });
    });
  }
  if (document.querySelector('link[href*="docsify-copy-code"]')) {
    console.warn(
      "[Deprecation] Link to external docsify-copy-code stylesheet is no longer necessary."
    );
  }
  window.DocsifyCopyCodePlugin = {
    init: function init() {
      return function (hook, vm) {
        hook.ready(function () {
          console.warn(
            "[Deprecation] Manually initializing docsify-copy-code using window.DocsifyCopyCodePlugin.init() is no longer necessary."
          );
        });
      };
    },
  };
  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = [docsifyCopyCode].concat(
    window.$docsify.plugins || []
  );
})();
//# sourceMappingURL=docsify-copy-code.js.map
