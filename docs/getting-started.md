# 🚀 Getting Started

> **Get QuickToast running in your project in under 2 minutes.** This guide covers everything from basic installation to advanced usage patterns.

---

## 📦 Installation

### CDN (Recommended)

```html
<!-- QuickToast CSS -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/hardik-143/quickToast/dist/css/index.min.css"
/>

<!-- QuickToast JS -->
<script src="https://cdn.jsdelivr.net/gh/hardik-143/quickToast/dist/js/index.min.js"></script>
```

### NPM (Coming Soon)

```bash
npm install quicktoast
```

---

## 🎯 Basic Usage

### Simple Toast

<div class="code-wrapper">
  <div>
    <button data-quicktoast>Show Basic Toast</button>
  </div>

```javascript
// Basic notification
QuickToast({
  text: "Hello, this is a notification!",
  duration: 3000,
}).notify();
```

</div>

### Using Helper Functions

<div class="code-wrapper">
  <div>
    <button data-quicktoast>Show Success Toast</button>
  </div>

```javascript
// Quick success message
QuickToast.success({
  text: "File uploaded successfully!",
  duration: 4000,
});

// Info notification
QuickToast.info({
  text: "Your profile has been updated!",
});

// Warning alert
QuickToast.warning({
  text: "Session expires in 10 minutes",
});

// Error message
QuickToast.error({
  text: "Failed to save changes",
});
```

</div>

---

## 🎨 Advanced Examples

### Toast with Title and Actions

<div class="code-wrapper">
  <div>
    <button data-quicktoast>Show Action Toast</button>
  </div>

```javascript
QuickToast.info({
  text: "New update available! Would you like to install it now?",
  title: "Update Ready",
  duration: 8000,
  confirmButton: {
    text: "Install Now",
    action: () => {
      console.log("Installing update...");
      // Handle update installation
    },
  },
});
```

</div>

### Custom Styling and Position

<div class="code-wrapper">
  <div>
    <button data-quicktoast>Show Custom Toast</button>
  </div>

```javascript
QuickToast.success({
  text: "Custom styled success toast!",
  title: "Success",
  position: "top-center",
  duration: 5000,
  closeButton: true,
  style: {
    background: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    borderRadius: "15px",
  },
});
```

</div>

### HTML Content and Navigation

<div class="code-wrapper">
  <div>
    <button data-quicktoast>Show HTML Toast</button>
  </div>

```javascript
QuickToast({
  text: "Click to view your profile",
  title: "Profile Updated",
  destination: "/profile",
  newWindow: false,
  duration: 6000,
  onClick: () => {
    console.log("Toast clicked!");
  },
}).notify();
```

</div>

---

## 🔧 Configuration Options

### Essential Options

| Option     | Type   | Default       | Description                                                                                                 |
| ---------- | ------ | ------------- | ----------------------------------------------------------------------------------------------------------- |
| `text`     | String | Required      | The message to display                                                                                      |
| `type`     | String | `"info"`      | Toast type: `info`, `success`, `warning`, `error`, `danger`                                                 |
| `duration` | Number | `3000`        | Display time in milliseconds (0 = always visible)                                                           |
| `position` | String | `"top-right"` | Position: `"top-left"`, `"top-center"`, `"top-right"`, `"bottom-left"`, `"bottom-center"`, `"bottom-right"` |

### Advanced Options

| Option          | Type     | Default | Description                      |
| --------------- | -------- | ------- | -------------------------------- |
| `title`         | String   | `null`  | Optional title above the message |
| `closeButton`   | Boolean  | `false` | Show close button                |
| `stopOnHover`   | Boolean  | `false` | Pause timeout on hover           |
| `confirmButton` | Object   | `null`  | Action button configuration      |
| `destination`   | String   | `null`  | URL to navigate to on click      |
| `onClick`       | Function | `null`  | Click callback function          |
| `onClose`       | Function | `null`  | Close button callback            |

---

## 🎭 Toast Types

QuickToast comes with 5 built-in types, each with distinct styling and icons:

- **`info`** - Blue theme with ℹ️ icon (general information)
- **`success`** - Green theme with ✓ icon (successful operations)
- **`warning`** - Orange theme with ⚠️ icon (warnings)
- **`error`** - Red theme with ❌ icon (errors)
- **`danger`** - Red theme with 🚨 icon (critical alerts)

---

## 📍 Positioning System

### Shorthand Positioning

```javascript
// Use shorthand for quick positioning
QuickToast.success({
  text: "Top left toast",
  position: "tl", // Same as "top-left"
});

QuickToast.info({
  text: "Bottom center toast",
  position: "bc", // Same as "bottom-center"
});
```

### Full Position Names

```javascript
// Full position names for clarity
QuickToast.warning({
  text: "Top center warning",
  position: "top-center",
});

QuickToast.error({
  text: "Bottom right error",
  position: "bottom-right",
});
```

---

## 🚀 Next Steps

Now that you have the basics, explore:

- **[Functions](functions.md)** - Learn about helper functions and shortcuts
- **[Options](options.md)** - Complete configuration reference
- **[Events](events.md)** - Lifecycle events and callbacks
- **[Data API](data-api.md)** - Declarative toast creation

---

## 💡 Pro Tips

1. **Use helper functions** for common toast types - they're more readable
2. **Set appropriate duration** - longer for important messages, shorter for quick confirmations
3. **Position strategically** - different positions for different message types
4. **Include actions** when users need to take action
5. **Use custom styling** to match your app's design system
