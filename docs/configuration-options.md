# Configuration Options

> Here are some example configuration options for QuickToast:

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

> works only when `alwaysVisible: false`.

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
}).showToast();
```

</div>

---

## type

Set the type of toast notification to apply predefined styles.

Available Options are:

- `success`: Indicates a successful action.
- `error`: Indicates an error or warning.
- `info`: Provides general information (`default`).
- `warning`: Indicates a potential issue.
- `danger`: Indicates a critical problem or action required.

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

---

## Redirect

### destination

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

---

## alwaysVisible

Set this option to `true` if you want the toast to remain visible until explicitly closed.

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

> using `alwaysVisible: true` with duration will automatically set the duration to `Infinity`.

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

## onDestroy

callback function to be called when the toast is removed

<div class="code-wrapper">
<div>
  <button data-quicktoast>Show Toast</button>
</div>

```javascript
QuickToast({
  text: "This toast will call onDestroy when removed",
  onDestroy: () => {
    alert("Toast was removed");
  },
}).showToast();
```

</div>

---

## beforeDestination

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

## showOkayButton

Set this option to `true` if you want to display an action button

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "This toast has an okay button",
  showOkayButton: true,
}).showToast();
```

</div>

---

## okayButtonText

This option allows you to customize the text of the okay button.

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "This toast has a custom okay button",
  showOkayButton: true,
  okayButtonText: "Got it!",
}).showToast();
```

</div>

---

## onOkay

callback function to be called when the okay button is clicked

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "This toast will call onOkay when the okay button is clicked",
  showOkayButton: true,
  onOkay: () => {
    alert("Okay button was clicked");
  },
}).showToast();
```

</div>

---

## closeAfterOnOkay

Set this option to `true` if you want the toast not to be removed automatically after the okay button is clicked.

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "This toast will be removed after the okay button is clicked",
  showOkayButton: true,
  closeAfterOnOkay: true,
  onOkay: () => {
    alert("Okay button was clicked");
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

#### Without escaping html

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

#### With escaping html

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

---

## oldestFirst

Set this option to `true` if you want to display the oldest toast first.
Let's understand better with an example

Latest toast will be displayed at the most top

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toasts</button>
  </div>
  <div id="my-custom-container"></div>

```javascript
QuickToast({
  text: "This toast will be displayed first",
  type: "warning",
  //   oldestFirst: true,
}).showToast();
QuickToast({
  text: "This toast will be displayed second",
  type: "error",
  //   oldestFirst: true,
}).showToast();
QuickToast({
  text: "This toast will be displayed third",
  type: "success",
  //   oldestFirst: true,
}).showToast();
QuickToast({
  text: "This toast will be displayed fourth",
  //   oldestFirst: true,
}).showToast();
```

</div>

Latest toast will be displayed at the most bottom

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toasts</button>
  </div>
  <div id="my-custom-container"></div>

```javascript
QuickToast({
  text: "This toast will be displayed first",
  type: "warning",
  oldestFirst: true,
}).showToast();
QuickToast({
  text: "This toast will be displayed second",
  type: "error",
  oldestFirst: true,
}).showToast();
QuickToast({
  text: "This toast will be displayed third",
  type: "success",
  oldestFirst: true,
}).showToast();
QuickToast({
  text: "This toast will be displayed fourth",
  oldestFirst: true,
}).showToast();
```

</div>
