# QuickToast Functions

> QuickToast provides convenient function shortcuts for creating different types of toast notifications. These functions are easier to use than the main constructor and automatically set the appropriate styling and icons.

---

## Available Functions

QuickToast offers 5 main functions that you can call directly:

- **`QuickToast.info()`** - Information notifications (blue theme)
- **`QuickToast.success()`** - Success messages (green theme)
- **`QuickToast.warning()`** - Warning alerts (orange theme)
- **`QuickToast.error()`** - Error messages (red theme)
- **`QuickToast.danger()`** - Danger/critical alerts (red theme)

---

## Function Syntax

All functions follow the same pattern:

```javascript
QuickToast.functionName(options);
```

Where `options` is an object containing the toast configuration.

---

## Quick Examples

### Basic Usage

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
// Information toast
QuickToast.info({
  text: "Your profile has been updated!",
});

// Success toast
QuickToast.success({
  text: "File uploaded successfully!",
});

// Warning toast
QuickToast.warning({
  text: "Your session expires in 5 minutes",
});

// Error toast
QuickToast.error({
  text: "Failed to save changes",
});

// Danger toast
QuickToast.danger({
  text: "Critical system error detected!",
});
```

</div>

---

### With Custom Options

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast.success({
  text: "Operation completed successfully!",
  title: "Success",
  duration: 5000,
  position: "top-center",
  closeButton: true,
});
```

</div>

---

## Function vs Constructor

### Using Function Shortcut

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
// Simple and readable
QuickToast.info({ text: "Info message" });
QuickToast.success({ text: "Success message" });
QuickToast.warning({ text: "Warning message" });
```

</div>

---

### Using Main Constructor

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
// More verbose
QuickToast({ text: "Info message", type: "info" }).notify();
QuickToast({ text: "Success message", type: "success" }).notify();
QuickToast({ text: "Warning message", type: "warning" }).notify();
```

</div>

#### Which one should you use?

- Use the function shortcuts when the type is fixed and you want the most concise, readable call.
- Use the constructor (or a small wrapper) when you need to set the type dynamically or reuse common options across different types.
- Function shortcuts always set a specific type; they are not meant to generate other types.

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
// Global helper: choose the type dynamically per use case
function notify({ text, type = "info", ...rest }) {
  return QuickToast({ text, type, ...rest }).notify();
}

// Usage
notify({ text: "Saved!", type: "success" });
notify({ text: "Heads up", type: "warning", duration: 7000 });
notify({ text: "Uh oh", type: "error", closeButton: true });
```

</div>

---

## Best Practices

1. **Choose the right function**: Use the function that matches your message type
2. **Keep messages concise**: Toast messages should be easily scannable
3. **Set appropriate duration**: Longer for important messages, shorter for quick confirmations
4. **Use strategic positioning**: Different positions for different message types
5. **Include actions when relevant**: Use confirmButton for actionable notifications

---

## Function Reference

| Function               | Color  | Icon | Use Case                             |
| ---------------------- | ------ | ---- | ------------------------------------ |
| `QuickToast.info()`    | Blue   | ℹ️   | General information, tips, updates   |
| `QuickToast.success()` | Green  | ✓    | Successful operations, confirmations |
| `QuickToast.warning()` | Orange | ⚠️   | Warnings, attention needed           |
| `QuickToast.error()`   | Red    | ❌   | Errors, failures, issues             |
| `QuickToast.danger()`  | Red    | 🚨   | Critical errors, security alerts     |

---

## Related Documentation

- [Getting Started](getting-started.md) - Basic setup and installation
- [Options](options.md) - Complete list of configuration options
- [Events](events.md) - Toast lifecycle events
- [Data API](data-api.md) - Declarative toast creation
- [QuickToast Functions](quicktoast-functions.md) - Detailed function documentation
