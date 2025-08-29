# 🚀 QuickToast

> **🎉 The feature-rich toast library you'll ever need.** Built with real-world applications in mind, QuickToast goes beyond simple notifications to deliver a complete user feedback system.

<div class="blockquote-orange blockquote-wrapper">

!> **🔥 Pro tip**: If you've ever thought "I wish this toast could do more than just disappear," then congratulations - you've found your soulmate! QuickToast is like that friend who always has your back, but for notifications. ⚡

</div>

---

## **What Makes QuickToast Special?** <!-- {docsify-ignore} -->

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
- **Type-based theming**: 5 built-in types with their SVG icons
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

<!-- ## <span>🔗</span> Related Documentation

- [📖 Getting Started](getting-started.md) - Setup and basic usage
- [⚙️ Functions](functions.md) - Helper functions and shortcuts
- [🎛️ Options](options.md) - Complete configuration reference
- [📡 Events](events.md) - Lifecycle events and callbacks
- [🎨 Data API](data-api.md) - Declarative toast creation -->
