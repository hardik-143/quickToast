# 🎛️ **Options**

> **🎯 The Ultimate QuickToast Configuration Guide** - Because sometimes you need more control than just "show me a toast, any toast!"

<div class="blockquote-orange blockquote-wrapper">

!> **Pro tip**: Think of these options as your toast's personality traits. Want a shy toast that disappears quickly? Set `duration: 1000`. Want a clingy toast that never leaves? Set `alwaysVisible: true`. The power is yours! ⚡

</div>

---

| Option                  | Type          | Default     | Description                                                                   |
| ----------------------- | ------------- | ----------- | ----------------------------------------------------------------------------- |
| **text**                | `string`      | -           | The text content to display in the toast notification                         |
| **title**               | `string`      | -           | The title to display in the toast notification                                |
| **node**                | `HTMLElement` | -           | Custom DOM element for complex toast content (overrides `text`)               |
| **duration**            | `number`      | `3000`      | Duration in milliseconds before toast disappears                              |
| **alwaysVisible**       | `boolean`     | `false`     | Keep toast visible until manually closed                                      |
| **progress**            | `boolean`     | `false`     | Show progress bar indicating remaining time                                   |
| **stopOnHover**         | `boolean`     | `false`     | Pause auto-dismiss when hovering over toast                                   |
| **type**                | `string`      | `"info"`    | Toast type: `"success"`, `"error"`, `"info"`, `"warning"`, `"danger"`         |
| **destination**         | `string`      | -           | URL to redirect to when toast is clicked                                      |
| **newWindow**           | `boolean`     | `false`     | Open destination in new window/tab                                            |
| **close**               | `boolean`     | `true`      | Show close button on toast                                                    |
| **onDestroy**           | `function`    | -           | Callback when toast is removed                                                |
| **beforeDestination**   | `function`    | -           | Callback before navigating to destination                                     |
| **onClick**             | `function`    | -           | Callback when toast is clicked (only without destination)                     |
| **showConfirmButton**   | `boolean`     | `false`     | Display an action button on toast                                             |
| **confirmButtonText**   | `string`      | `"Confirm"` | Custom text for the confirm button                                            |
| **onConfirm**           | `function`    | -           | Callback when confirm button is clicked                                       |
| **closeAfterOnConfirm** | `boolean`     | `false`     | Remove toast after confirm button is clicked                                  |
| **position**            | `string`      | `"right"`   | Horizontal position: `"left"` or `"right"`                                    |
| **gravity**             | `string`      | `"top"`     | Vertical position: `"top"` or `"bottom"`                                      |
| **placement**           | `string`      | -           | Shorthand: `"(top \| bottom)-(left \| center \| right)"`(e.g.,`"top-center"`) |
| **rootClass**           | `string`      | -           | Custom CSS class for toast root element                                       |
| **escapeMarkup**        | `boolean`     | `false`     | Escape HTML markup in toast text                                              |
| **ariaLive**            | `string`      | `"polite"`  | ARIA live region: `"off"`, `"polite"`, `"assertive"`                          |
| **style**               | `object`      | -           | Custom CSS styles for toast                                                   |
| **selector**            | `string`      | `"body"`    | Custom selector for toast container                                           |

---

## text

### Plain Text

Use a simple string to display a basic notification.

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast.info({
  text: "A Plain Text Notification",
});
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
QuickToast.success({
  text: "<b>Success!</b> 🎉 Your content has been <span style='color:green;'>added</span>.",
  escapeMarkup: true,
});
```

</div>

---

<div class="blockquote-orange blockquote-wrapper">

!> **Pro tip**: Think of `title` as your toast's name tag. Without it, your toast is just another anonymous notification in the crowd. Give it a proper name and watch it shine! ✨

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
}).notify();
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
}).notify();
```

</div>

---

<div class="blockquote-orange blockquote-wrapper">

!> **Pro tip**: The `node` option is like giving your toast a makeover. Instead of plain text, you can now create toasts that look like they came from a designer's dream! Just remember: with great power comes great responsibility... and potentially very complex HTML. 🎭

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
}).notify();
```

</div>

!> When `node` is provided, it takes precedence over `text` and will override it.

---

<div class="blockquote-orange blockquote-wrapper">

!> **Pro tip**: `duration` is like setting a timer for your toast's social life. Too short and it's gone before anyone notices. Too long and it becomes that guest who never leaves the party. Find the sweet spot! 🎯

</div>

---

## duration

Set the duration for which the toast notification will be visible.

> default is `3000`.

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast.info({
  text: "This toast will disappear after 5 seconds",
  duration: 5000,
});
```

</div>

---

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast.danger({
  text: "This Toast stays visible for 15 seconds",
  duration: 15000,
});
```

</div>

---

<div class="blockquote-orange blockquote-wrapper">

!> **Pro tip**: `progress` is like adding a countdown timer to your toast. It's perfect for those moments when you want to build suspense - "Will they read this message before it disappears?" The answer is usually no, but hey, at least they know how much time they have left! 😅

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
}).notify();
```

</div>

---

<div class="blockquote-orange blockquote-wrapper">

!> **Pro tip**: `alwaysVisible: true` is like giving your toast a permanent visa. It's the clingy friend who never leaves until you explicitly tell them to go. Perfect for important messages, but use sparingly - nobody likes a toast that overstays its welcome! 🚪

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
}).notify();
```

</div>

!> `alwaysVisible: true` takes precedence over both `progress` and `duration` — enabling it will override progress, and automatically set duration to `Infinity`.

---

<div class="blockquote-orange blockquote-wrapper">

!> **Pro tip**: `stopOnHover` is like giving your toast a pause button. Hover over it and time stands still! It's perfect for those users who like to take their sweet time reading (we all know who you are). Just remember: with great power comes great responsibility... and potentially very long-lived toasts! ⏸️

</div>

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
}).notify();
```

</div>

---

<div class="blockquote-orange blockquote-wrapper">

!> **Pro tip**: The `type` option is like choosing your toast's personality. Success toasts are the optimistic ones, error toasts are the dramatic ones, and warning toasts are the cautious ones. Choose wisely - your toast's emotional state matters! 🎨

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
}).notify();

QuickToast({
  text: "An error occurred.",
  type: "error",
  alwaysVisible: true,
}).notify();

QuickToast({
  text: "Here is some information.",
  type: "info",
}).notify();

QuickToast({
  text: "This is a warning!",
  type: "warning",
}).notify();

QuickToast({
  text: "Critical error! Action required.",
  type: "danger",
  alwaysVisible: true,
}).notify();
```

</div>

---

<div class="blockquote-orange blockquote-wrapper">

!> **Pro tip**: The `destination` option turns your toast into a clickable link! It's like giving your notification a passport to travel anywhere on the web. Perfect for when you want to say "Hey, check this out!" and actually take them there. No more copy-pasting URLs like a caveman! 🚀

</div>

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
}).notify();
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
}).notify();
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
}).notify();
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
}).notify();
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
}).notify();
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
}).notify();
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
}).notify();
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
}).notify();
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
}).notify();

// 2) Cancel by returning false
QuickToast({
  text: "Return false to block close",
  alwaysVisible: true,
  onClose: () => false,
}).notify();

// 3) Cancel by preventDefault
QuickToast({
  text: "preventDefault() to block close",
  alwaysVisible: true,
  onClose: (e) => e.preventDefault(),
}).notify();
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
}).notify();
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
  - `api_hide`: Programmatically hidden via `dismiss()`.
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
}).notify();
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
}).notify();
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
}).notify();
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
}).notify();
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
}).notify();
```

</div>

---

<div class="blockquote-orange blockquote-wrapper">

!> **Pro tip**: `position` is like choosing which side of the room your toast hangs out on. Left side? Right side? Center stage? It's like being a toast DJ - you control where the party happens! Just remember: left is right, right is left, and center is... well, center! 🎯

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
}).notify();
```

</div>

---

<div class="blockquote-orange blockquote-wrapper">

!> **Pro tip**: `gravity` is like choosing whether your toast lives in the sky or underground. Top gravity? It's floating like a cloud. Bottom gravity? It's chilling with the roots. Think of it as your toast's altitude preference - some like to soar, others prefer to stay grounded! 🚀

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
}).notify();
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
}).notify();
```

</div>

---

<div class="blockquote-orange blockquote-wrapper">

!> **Pro tip**: `placement` is like having a GPS for your toast! Instead of manually setting `position` and `gravity`, just tell it where to go: "top-center", "bottom-left", etc. It's like ordering food delivery - you don't need to give the driver separate latitude and longitude coordinates! 🗺️

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
}).notify();

QuickToast({
  text: "Bottom Left via placement",
  placement: "bottom-left",
}).notify();

QuickToast({
  text: "Bottom Center via placement",
  placement: "bottom-center",
}).notify();
```

</div>

---

## Placement Shorthand Aliases

You can also use compact shorthands for faster typing. These are equivalent to the full placement values:

| Shorthand     | Full Placement  | Description         |
| ------------- | --------------- | ------------------- |
| `t-l` or `tl` | `top-left`      | Top left corner     |
| `t-c` or `tc` | `top-center`    | Top center          |
| `t-r` or `tr` | `top-right`     | Top right corner    |
| `b-l` or `bl` | `bottom-left`   | Bottom left corner  |
| `b-c` or `bc` | `bottom-center` | Bottom center       |
| `b-r` or `br` | `bottom-right`  | Bottom right corner |

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
}).notify();
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
  text: "This toast has <i><b><u>escaped markup</u></b></i>",
}).notify();
```

</div>

### With escaping html <!-- {docsify-ignore} -->

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "This toast has <i><b><u>escaped markup</u></b></i>",
  escapeMarkup: true,
}).notify();
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
}).notify();
```

</div>

---

<div class="blockquote-orange blockquote-wrapper">

!> **Pro tip**: The `style` option is like being a toast fashion designer! Want a gradient background? Custom fonts? Border radius that would make a circle jealous? This is your playground! Just remember: with great styling power comes great responsibility... and potentially very flashy toasts! ✨

</div>

---

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
    background: "linear-gradient(to right,rgb(145, 147, 255),rgb(67, 97, 206))",
    color: "#fff",
  },
}).notify();
```

</div>

---

<div class="blockquote-orange blockquote-wrapper">

!> **Pro tip**: The `selector` option is like choosing your toast's neighborhood. Want it to live in a specific div instead of the default body? It's like real estate for toasts! Perfect for when you want your notifications to stay within certain boundaries. Location, location, location! 🏠

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
}).notify();
```

</div>
