# Configuration Options

> Here are some example configuration options for QuickToast:

---

## Content

### Plain Text

Use a simple string to display a basic notification.

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "A Plain Text Notification",
  duration: 3000, // duration in milliseconds
}).showToast();
```

</div>

### HTML String

Add formatted content (bold, colors, emojis, etc.) using an HTML string.

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "<b>Success!</b> 🎉 Your content has been <span style='color:green;'>added</span>.",
  duration: 3000, // duration in milliseconds
}).showToast();
```

</div>

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
  duration: 3000, // duration in milliseconds
}).showToast();
```

</div>
