# QuickToast

> QuickToast is a lightweight, customizable JavaScript library to display toast notifications on your web pages. It’s simple to use and requires no dependencies.

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

```javascript
QuickToast({
  text: "Hello, this is a notification!",
  duration: 3000, // duration in milliseconds
}).notify();
```

---

## How It Works

1. Call QuickToast() – Pass an options object with your desired message, duration, and type.
2. Show Toast – Use .notify() to display the notification.
3. Customize – Override default options for styling, HTML content, or behavior.

## Features

- Lightweight & Fast – Minimal footprint, quick load times.
- Customizable – Control duration, position, styling, and more.
- No Dependencies – Pure JavaScript, works out of the box.
- Multiple Toast Types – Success, error, info, warning, or custom messages.
- HTML Support – Add rich content using HTML nodes.

> QuickToast is perfect for alerts, notifications, and user feedback. Add it to any project and enhance the UI without extra dependencies.
