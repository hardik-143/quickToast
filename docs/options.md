# Options

> Here are some example configuration options for QuickToast:

| Option              | Type          | Default       | Description                                                                   |
| ------------------- | ------------- | ------------- | ----------------------------------------------------------------------------- |
| text                | `string`      | -             | The text content to display in the toast notification                         |
| title               | `string`      | -             | The title to display in the toast notification                                |
| node                | `HTMLElement` | -             | Custom DOM element for complex toast content (overrides `text`)               |
| duration            | `number`      | `3000`        | Duration in milliseconds before toast disappears                              |
| alwaysVisible       | `boolean`     | `false`       | Keep toast visible until manually closed                                      |
| progress            | `boolean`     | `false`       | Show progress bar indicating remaining time                                   |
| stopOnHover         | `boolean`     | `false`       | Pause auto-dismiss when hovering over toast                                   |
| type                | `string`      | `"info"`      | Toast type: `"success"`, `"error"`, `"info"`, `"warning"`, `"danger"`         |
| destination         | `string`      | -             | URL to redirect to when toast is clicked                                      |
| newWindow           | `boolean`     | `false`       | Open destination in new window/tab                                            |
| close               | `boolean`     | `true`        | Show close button on toast                                                    |
| onDestroy           | `function`    | -             | Callback when toast is removed                                                |
| beforeDestination   | `function`    | -             | Callback before navigating to destination                                     |
| onClick             | `function`    | -             | Callback when toast is clicked (only without destination)                     |
| showConfirmButton   | `boolean`     | `false`       | Display an action button on toast                                             |
| confirmButtonText   | `string`      | `"Confirm"`   | Custom text for the confirm button                                            |
| onConfirm           | `function`    | -             | Callback when confirm button is clicked                                       |
| closeAfterOnConfirm | `boolean`     | `false`       | Remove toast after confirm button is clicked                                  |
| placement           | `string`      | `"top-right"` | Shorthand: `"(top \| bottom)-(left \| center \| right)"`(e.g.,`"top-center"`) |
| position            | `string`      | `"right"`     | Horizontal position: `"left"` or `"right"`                                    |
| gravity             | `string`      | `"top"`       | Vertical position: `"top"` or `"bottom"`                                      |
| rootClass           | `string`      | -             | Custom CSS class for toast root element                                       |
| escapeMarkup        | `boolean`     | `false`       | Escape HTML markup in toast text                                              |
| ariaLive            | `string`      | `"polite"`    | ARIA live region: `"off"`, `"polite"`, `"assertive"`                          |
| style               | `object`      | -             | Custom CSS styles for toast                                                   |
| selector            | `string`      | `"body"`      | Custom selector for toast container                                           |

---

## text

### Plain Text

Use a simple string to display a basic notification.

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "A Plain Text Notification",
}).showToast();
```

</div>

---

### HTML String

Add formatted content (bold, colors, emojis, etc.) using an HTML string.

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "<b>Success!</b> 🎉 Your content has been <span style='color:green;'>added</span>.",
  type: "success",
  escapeMarkup: true,
}).showToast();
```

</div>

---

## title

Add a title to your toast notification for better organization and hierarchy.

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  title: "Success",
  text: "Your profile has been updated successfully!",
  type: "success",
}).showToast();
```

</div>

---

### Title with HTML

You can also use HTML in the title for formatting.

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  title: "<b>Error</b> ⚠️",
  text: "Something went wrong. Please try again.",
  type: "error",
  escapeMarkup: true,
}).showToast();
```

</div>

---

## node

Pass a custom DOM element for fully flexible and complex toast content.

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
let nodeHTML = document.createElement("div");
nodeHTML.innerHTML =
  "<b>Congratulations</b> 🎉 <br/> You've displayed <u>toast</u> with <i>custom html</i> content ";
QuickToast({
  node: nodeHTML,
}).showToast();
```

</div>

!> When `node` is provided, it takes precedence over `text` and will override it.

---

## duration

Set the duration for which the toast notification will be visible.

> default is `3000`.

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "This toast will disappear after 5 seconds",
  duration: 5000,
}).showToast();
```

</div>

---

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "This Toast stays visible for 15 seconds",
  duration: 15000,
  type: "danger",
}).showToast();
```

</div>

---

## progress

Show a progress bar indicating the remaining time before the toast disappears.

> default is `false`.

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "Toast with progress",
  duration: 5000,
  type: "error",
  progress: true,
}).showToast();
```

</div>

---

## alwaysVisible

Set this option to `true` if you want the toast to remain visible until explicitly closed.

> default is `false`.

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "This toast will remain visible until closed",
  alwaysVisible: true,
  type: "info",
}).showToast();
```

</div>

!> `alwaysVisible: true` takes precedence over both `progress` and `duration` — enabling it will override progress, and automatically set duration to `Infinity`.

---

## stopOnHover

decides whether the toast should stop auto-dismiss when hovered over.

> default is `false`.

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "Hover over me to stop auto-dismiss",
  duration: 5000,
  type: "error",
  progress: true,
  stopOnHover: true,
}).showToast();
```

</div>

---

## type

Set the type of toast notification to apply predefined styles.

Available Options are:

- `success`: Indicates a successful action.
- `error`: Indicates an error or warning.
- `info`: Provides general information.
- `warning`: Indicates a potential issue.
- `danger`: Indicates a critical problem or action required.

> default is `info`.

Let's see some examples of how to use these types in your toast notifications.

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toasts</button>
  </div>

```javascript
QuickToast({
  text: "Operation successful!",
  type: "success",
}).showToast();

QuickToast({
  text: "An error occurred.",
  type: "error",
}).showToast();

QuickToast({
  text: "Here is some information.",
  type: "info",
}).showToast();

QuickToast({
  text: "This is a warning!",
  type: "warning",
}).showToast();

QuickToast({
  text: "Critical error! Action required.",
  type: "danger",
}).showToast();
```

</div>

!> "error" and "danger" use the same UI styles. They are provided as separate types to differentiate semantics and usage contexts.

---

## destination

this configure where the toast redirects the user

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "Click here to go to Google",
  destination: "https://www.google.com",
}).showToast();
```

</div>

---

### newWindow

Set this option to `true` if you want the toast to open the destination link in a new window.

> default is `false`.

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "Visit our documentation",
  destination: "https://example.com/docs",
  newWindow: true,
}).showToast();
```

</div>

### confirmBeforeNav

Option to confirm before navigating. Accepts:

- `true`: shows a native confirm dialog
- `function`: `(url, event) => boolean | Promise<boolean>`

> navigation is cancelled if it returns `false` or rejects.

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "Go to external resource",
  destination: "https://example.com",
  confirmBeforeNav: (url) => window.confirm(`Open ${url}?`),
}).showToast();
```

</div>

---

### beforeDestination

callback function to be called before the destination is navigated to

> `destination` value must be present to make this option work

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "This toast will call beforeDestination before navigating",
  destination: "https://www.example.com",
  beforeDestination: () => {
    alert("Navigating to destination");
  },
}).showToast();
```

</div>

---

### beforeDestination (async)

`beforeDestination` may return a value or a Promise. Navigation is cancelled when it returns `false` or throws.

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
async function myAsyncGuard() {
  // wait for 3 seconds
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // return random true/false
  return Math.random() < 0.5;
}

QuickToast({
  text: "Go to dashboard",
  destination: "/dashboard",
  beforeDestination: async () => {
    const ok = await myAsyncGuard();
    return ok; // cancel if false
  },
}).showToast();
```

</div>

---

### Accessibility and interaction

- The toast gets `role="link"`, `tabindex="0"` and an `aria-label` derived from the destination hostname (e.g., "Open link to example.com").
- Keyboard support: pressing Enter or Space activates navigation.
- Clicks are debounced to prevent accidental double navigation.

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "Visit our documentation",
  destination: "https://example.com/docs",
  alwaysVisible: true,
  // Accessibility enhancements are automatic:
  // - role="link",
  // tabindex="0"
  // - aria-label based on hostname (e.g., example.com)
}).showToast();
```

</div>

---

## close

decides whether the close button is shown on the toast.

> default is `true`

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "This toast has no close button and will disappear after 3 seconds",
  close: false,
}).showToast();
```

</div>

---

## onClose

Callback invoked when the close (X) button is clicked. Supports sync and async functions.

```javascript
QuickToast({
  text: "Closable toast",
  onClose: async (e) => {
    // Optional: run async work before the toast is removed
    await new Promise((r) => setTimeout(r, 300));
    console.log("close completed");
  },
}).showToast();
```

Notes:

- If `onClose` throws or rejects, the toast will still be removed and an error will be logged.
- The onDestroy payload `reason` will be `close_click`.
- Returning `false` from `onClose` cancels the close.
- Calling `e.preventDefault()` inside `onClose(e)` cancels the close.

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
// 1) onClose callback (fires when close button is clicked)
QuickToast({
  text: "This toast has an onClose callback",
  alwaysVisible: true,
  onClose: () => {
    alert("close button clicked");
  },
}).showToast();

// 2) Cancel by returning false
QuickToast({
  text: "Return false to block close",
  alwaysVisible: true,
  onClose: () => false,
}).showToast();

// 3) Cancel by preventDefault
QuickToast({
  text: "preventDefault() to block close",
  alwaysVisible: true,
  onClose: (e) => e.preventDefault(),
}).showToast();
```

</div>

---

## onDestroy

callback function to be called when the toast is removed

<div class="code-wrapper">
<div>
  <button data-quicktoast>Show Toast</button>
</div>

```javascript
QuickToast({
  text: "This toast will call onDestroy when removed",
  onDestroy: (payload) => {
    alert("Toast was removed");
  },
}).showToast();
```

</div>

---

### onDestroy payload

The `onDestroy` callback receives a payload object with contextual details about why and when the toast was removed.

- Keys in the payload:

  - `type`: toast type (e.g., `info`, `success`, `warning`, `danger`, `error`)
  - `title`: title string if provided
  - `text`: text string if provided
  - `node`: html elment if provided
  - `reason`: why the toast was removed
  - `lifetimeMs`: milliseconds the toast was on screen (approx.)
  - `remainingToasts`: number of toasts remaining after removal

- Possible `reason` values:
  - `timeout`: Auto-dismissed after the configured duration elapsed.
  - `close_click`: User clicked the toast's close (X) button.
  - `dismiss_click`: User clicked a custom element marked to dismiss the toast.
  - `confirm_click`: User clicked the confirm/action button.
  - `destination`: User clicked the toast to navigate (link behavior).
  - `api_hide`: Programmatically hidden via `hideToast()`.
  - `quickToast_remove`: Removed by dispatching the `quickToast_remove` custom event.
  - `clear_toast`: Removed by calling the instance `clear()` method.

Example:

```javascript
onDestroy: (payload) => {
  console.log("Toast removed:", payload);
};
```

---

## onclick

callback function to be called when the toast is clicked

> only works when destination is not set

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "This toast will call onClick when clicked",
  onClick: () => {
    alert("Toast was clicked");
  },
}).showToast();
```

</div>

---

## showConfirmButton

Set this option to `true` if you want to display an action button

> default is `false`.

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "This toast has an confirm button",
  showConfirmButton: true,
}).showToast();
```

</div>

---

## confirmButtonText

This option allows you to customize the text of the confirm button.

> default is `Confirm`.

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "This toast has a custom text in confirm button",
  showConfirmButton: true,
  confirmButtonText: "Got it!",
}).showToast();
```

</div>

---

## onConfirm

callback function to be called when the confirm button is clicked

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "This toast will call onConfirm when the confirm button is clicked",
  showConfirmButton: true,
  onConfirm: () => {
    alert("Confirm button was clicked");
  },
}).showToast();
```

</div>

---

## closeAfterOnConfirm

Set this option to `true` if you want the toast not to be removed automatically after the confirm button is clicked.

> default is `false`.

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "This toast will be removed after the confirm button is clicked",
  showConfirmButton: true,
  closeAfterOnConfirm: true,
  onConfirm: () => {
    alert("Confirm button was clicked");
  },
}).showToast();
```

</div>

---

## position

Horizontal position of the toast container.

Available positions are:

- `left`
- `right`

> default is `right`

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "This toast is positioned on the left",
  position: "left",
}).showToast();
```

</div>

---

## gravity

Vertical position of the toast container.

Available positions are:

- `top`
- `bottom`

> default is `top`

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "This toast is positioned at the bottom",
  gravity: "bottom",
}).showToast();
```

</div>

Another example using both position and gravity

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "This toast is positioned at the bottom-left",
  gravity: "bottom",
  position: "left",
}).showToast();
```

</div>

---

## placement

Use `placement` as a shorthand for `gravity` + `position`.

Valid values:

- `top-left`
- `top-center`
- `top-right`
- `bottom-left`
- `bottom-center`
- `bottom-right`

`placement` takes precedence over `position`/`gravity`. If invalid, the library falls back to the explicit `position`/`gravity` or defaults.

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "Top Center via placement",
  placement: "top-center",
}).showToast();

QuickToast({
  text: "Bottom Left via placement",
  placement: "bottom-left",
}).showToast();

QuickToast({
  text: "Bottom Center via placement",
  placement: "bottom-center",
}).showToast();
```

</div>

---

Note on shorthand aliases:

- You can also use compact shorthands; these are equivalent:
  - `t-l`, `tl` → `top-left`
  - `t-c`, `tc` → `top-center`
  - `t-r`, `tr` → `top-right`
  - `b-l`, `bl` → `bottom-left`
  - `b-c`, `bc` → `bottom-center`
  - `b-r`, `br` → `bottom-right`

## rootClass

custom class names for the root element of the toast

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "This toast has a custom root class",
  rootClass: "my-custom-toast",
}).showToast();
```

</div>

---

## escapeMarkup

Set this option to `true` if you want to escape HTML markup in the toast text.

> default is `false`.

### Without escaping html <!-- {docsify-ignore} -->

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "This toast has <i>escaped markup</i>",
}).showToast();
```

</div>

### With escaping html <!-- {docsify-ignore} -->

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "This toast has <i>escaped markup</i>",
  escapeMarkup: true,
}).showToast();
```

</div>

---

## ariaLive

Set this option to change the ARIA live region politeness level.

Available values are:

- `off`
- `polite`
- `assertive`

> default is `polite`

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "This toast has a custom aria-live value",
  ariaLive: "assertive",
}).showToast();
```

</div>

--

## style

This option allows you to customize the CSS styles of the toast.

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "This toast has a custom background color",
  type: "error",
  style: {
    background: "linear-gradient(to right, #2e32ffff, #7b97feff)",
    color: "#000",
  },
}).showToast();
```

</div>

---

## selector

you can define a custom selector for the toast container.

> default is `body`

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>
  <div id="my-custom-container"></div>

```javascript
QuickToast({
  text: "This toast will be displayed in a custom container <br/> you can open <b>developer tools</b> to inspect it",
  selector: "#my-custom-container",
  escapeMarkup: true,
}).showToast();
```

</div>
