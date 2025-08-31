# 🚀 Getting Started :id=intro

**From Zero to Toast Hero in Under 2 Minutes!** This guide covers everything from basic installation to advanced usage patterns. No more staring at blank screens wondering where to start!

<div class="blockquote-orange blockquote-wrapper">

!> **Pro tip**: Think of this as your toast bootcamp. By the end, you'll be creating notifications so beautiful, users will actually want to see them. Yes, we're that good! 🚀

</div>

---

## Installation

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

---

## Basic Usage

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
    <button data-quicktoast>Show Toasts via Functions</button>
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

// Danger message
QuickToast.danger({
  text: "This is not good",
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

### Using Main Constructor

<div class="code-wrapper">
  <div>
    <button data-quicktoast>Show Constructor Toast</button>
  </div>

```javascript
// Using the main constructor with type parameter
QuickToast({
  text: "This is an info message",
  type: "info",
  duration: 3000,
}).notify();

// Error toast with constructor
QuickToast({
  text: "Something went wrong",
  type: "error",
  duration: 6000,
}).notify();
```

</div>

---

## Advanced Examples

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
  showConfirmButton: true,
  onConfirm: () => {
    alert("Installing update...");
  },
});
```

</div>

### Custom Styling and Position

<div class="code-wrapper">
  <div>
    <button data-quicktoast>Show Custom Styled Toast</button>
  </div>

```javascript
QuickToast.success({
  text: "Custom styled success toast!",
  title: "Success",
  placement: "top-center",
  duration: 5000,
  style: {
    background: "linear-gradient(45deg, #FFD93D 0%,rgb(241, 224, 154) 100%)",
    borderRadius: "15px",
    border: "1px solid black",
  },
});
```

</div>

### Navigation

<div class="code-wrapper">
  <div>
    <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  text: "Click to go to dashboard",
  title: "Profile Updated",
  destination: "/",
  newWindow: false,
  duration: 6000,
}).notify();
```

</div>

---

## Toast Types

QuickToast comes with 5 built-in types, each with distinct styling and icons:

- **`info`** - Blue theme with ℹ️ icon (general information)
- **`success`** - Green theme with ✅ icon (successful operations)
- **`warning`** - Orange theme with ⚠️ icon (warnings)
- **`error`** - Red theme with ❌ icon (errors)
- **`danger`** - Red theme with ❗ icon (critical alerts)

---

## Position and Gravity Options

### Using Position and Gravity Separately

You can specify position and gravity independently for fine-grained control:

<div class="code-wrapper">
  <div>
    <button data-quicktoast>Show Basic Toast</button>
  </div>

```javascript
// Position only - controls horizontal alignment
QuickToast.success({
  text: "Positioned toast",
  position: "center", // left, center, right
});

// Gravity only - controls vertical alignment
QuickToast.info({
  text: "Gravity controlled toast",
  gravity: "top", // top, bottom
});

// Combine both for precise positioning
QuickToast.warning({
  text: "Precise positioning",
  position: "right",
  gravity: "bottom",
});
```

</div>

---

### Using Placement (Recommended)

The `placement` option combines both position and gravity in one convenient property:

<div class="code-wrapper">
  <div>
    <button data-quicktoast>Show Basic Toast</button>
  </div>

```javascript
// Placement automatically sets both position and gravity
QuickToast.success({
  text: "Top center toast",
  placement: "top-center", // Sets gravity: "top", position: "center"
});

QuickToast.error({
  text: "Bottom right left",
  placement: "bottom-left", // Sets gravity: "bottom", position: "left"
});
```

</div>

---

### Mixing Approaches

You can use placement for the main positioning and override specific values:

<div class="code-wrapper">
  <div>
    <button data-quicktoast>Show Basic Toast</button>
  </div>

```javascript
QuickToast.info({
  text: "Custom positioned toast",
  placement: "bottom-center", // Base positioning
  position: "left", // Override position to left
  // gravity remains "top" from placement
});
```

</div>

---

### Available Values

**Position Options:**

- `"left"` - Align to left side
- `"center"` - Center horizontally
- `"right"` - Align to right side

**Gravity Options:**

- `"top"` - Position at top of screen
- `"bottom"` - Position at bottom of screen

**Placement Combinations:**

- `"top-left"`, `"top-center"`, `"top-right"`
- `"bottom-left"`, `"bottom-center"`, `"bottom-right"`
- Shorthand: `"tl"`, `"tc"`, `"tr"`, `"bl"`, `"bc"`, `"br"`

---

## Next Steps

Now that you have the basics, explore:

- **[Options](options.md)** - Complete configuration reference
- **[Functions](functions.md)** - Learn about helper functions and shortcuts
- **[Data API](data-api.md)** - Declarative toast creation
- **[Events](events.md)** - Lifecycle events and callbacks

---

## Pro Tips

1. **Use helper functions** for common toast types - they're more readable
2. **Set appropriate duration** - longer for important messages, shorter for quick confirmations
3. **Position strategically** - different positions for different message types
4. **Include actions** when users need to take action
5. **Use custom styling** to match your app's design system
