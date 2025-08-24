# Configuration Options

> Here are some example configuration options for QuickToast:

---

## content

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

### Node Element

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

> if no duration is specified, then default duration of 3000ms will be used.

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

