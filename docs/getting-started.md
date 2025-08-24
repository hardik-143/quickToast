# Getting Started

> QuickToast is perfect for alerts, notifications, and user feedback. Add it to any project and enhance the UI without extra dependencies.

---

## Installation

```html
<!-- QuickToast CSS -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/hardik-143/quickToast/dist/css/index.min.css"
/>

<!-- QuickToast JS -->
<script src="https://cdn.jsdelivr.net/gh/hardik-143/quickToast/dist/js/index.min.js"></script>
```

## Usage

  <div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "Hello, this is a notification!",
  duration: 3000, // duration in milliseconds
}).showToast();
```

</div>
