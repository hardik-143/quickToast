# 🚀 QuickToast

A lightweight, feature-rich toast notification library for modern web applications.

## Features

- 🎨 **5 Built-in Toast Types**

  - Info (blue theme with ℹ️)
  - Success (green theme with ✅)
  - Warning (orange theme with ⚠️)
  - Error (red theme with ❌)
  - Danger (red theme with ❗)

- 📍 **Flexible Positioning**

  - Top/bottom alignment
  - Left/center/right placement
  - Shorthand options like "tl" (top-left)
  - Responsive positioning on mobile

- ⚡ **Rich Features**
  - Custom HTML content support
  - Progress bars
  - Click actions & navigation
  - Custom styling options
  - Event lifecycle hooks

## Quick Start

Add QuickToast to your project:

```html
<!-- CSS -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/hardik-143/quickToast/dist/css/index.min.css"
/>

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/gh/hardik-143/quickToast/dist/js/index.min.js"></script>
```

Show your first toast:

```javascript
// Simple info toast
QuickToast.info({
  text: "Hello, World!",
  duration: 3000,
});

// Toast with more options
QuickToast({
  title: "Welcome",
  text: "Thanks for trying QuickToast!",
  type: "success",
  placement: "top-center",
  duration: 5000,
}).notify();
```

## Documentation

Visit our [documentation site](https://quicktoast.thehardik.in/) to learn more about:

## License

MIT License

Copyright (c) 2025 Hardik

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
