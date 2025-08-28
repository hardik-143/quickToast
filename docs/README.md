# 🚀 QuickToast

> **The feature-rich toast library you'll ever need.** Built with real-world applications in mind, QuickToast goes beyond simple notifications to deliver a complete user feedback system.

---

## **What Makes QuickToast Special?**

This isn't just another toast library. QuickToast is developed for **production-grade applications** with features that actually matter:

### <span>🎯</span> Smart Positioning

- **Flexible positioning**: Use shorthand like `"tl"` (top-left) or full `"top-center"`
- **Responsive design**: Automatically centers on small screens (≤360px)

### <span>🔄</span> Advanced Lifecycle Control

- **Event-driven architecture**: Hook into `onClose`, `onDestroy`, `onClick`
- **Async support**: `onClose`, `beforeDestination` supports async operations
- **Smart timeouts**: Pause auto-dismiss on hover with `stopOnHover`
- **Global events**: Listen to `quickToast:destroy`, `quickToast:timeout`, `quickToast:count-change`

### <span>🎨</span> Rich Content & Styling

- **HTML nodes**: Display complex content, forms, or custom components
- **Custom styling**: Override any CSS property with the `style` object
- **Type-based theming**: 5 built-in types with custom SVG icons
- **Progress bars**: Show loading states with built-in progress support

### <span>🚀</span> Developer Experience

- **Zero dependencies**: Pure vanilla JavaScript
- **Helper functions**: `QuickToast.info()`, `QuickToast.success()`, etc.
- **Using Main Constructor** : `QuickToast(options).notify()`
- **Console utilities**: `QuickToast.demo()`, `QuickToast.clear()`, `QuickToast.count()`

### <span>🌐</span> Navigation & Actions

- **Click destinations**: Navigate users with `destination` option
- **Confirmation buttons**: Action buttons with custom callbacks
- **New window support**: Open links in new tabs
- **Pre-navigation hooks**: `beforeDestination` callback for validation

---

<button data-quicktoast-random>🎉 Try Random Toast</button>

## <span>🚀</span> Quick Start

<br/>
<div class="code-wrapper">
  <div>
    <button data-quicktoast>Show Toast</button>
  </div>

```javascript
// Simple success toast
QuickToast.success({
  text: "File uploaded successfully!",
  duration: 5000,
});

// Rich content with actions
QuickToast.info({
  text: "New update available!",
  title: "Update Ready",
  alwaysVisible: true,
  showConfirmButton: true,
  onConfirm: () => {
    alert("Confirm Button Clicked");
  },
  closeAfterOnConfirm: true,
});
```

</div>

<!-- ## <span>🔗</span> Related Documentation

- [📖 Getting Started](getting-started.md) - Setup and basic usage
- [⚙️ Functions](functions.md) - Helper functions and shortcuts
- [🎛️ Options](options.md) - Complete configuration reference
- [📡 Events](events.md) - Lifecycle events and callbacks
- [🎨 Data API](data-api.md) - Declarative toast creation -->

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

### Console Utilities

<div class="code-wrapper">
  <div>
    <button data-quicktoast>Try Console Utilities</button>
  </div>

```javascript
// Demo multiple toasts
QuickToast.demo();

// Get count of active toasts
setTimeout(() => {
  const activeCount = QuickToast.count();
  alert(`Active toasts: ${activeCount}`);
}, 2500);
```

</div>
