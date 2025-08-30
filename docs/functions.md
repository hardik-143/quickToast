# 🎭 QuickToast Functions :id=quicktoast-functions

**⚡ The Power of One-Line Toast Creation!** Why write 3 lines when you can write 1? These function shortcuts are your secret weapon for creating beautiful, type-specific notifications in a single command. No more remembering type names or dealing with verbose constructors - just pure toast magic!

<div class="blockquote-orange blockquote-wrapper">

!> **🚀 Pro tip**: Think of these as your toast's personality shortcuts. Instead of saying "I want a toast with type success," just say `QuickToast.success()` and watch the magic happen! It's like having a personal toast butler. 🎩✨

</div>

---

## 🚀 Your Toast Arsenal :id=your-toast-arsenal

**5 Functions, Infinite Possibilities** - Each function is a specialized tool designed for a specific purpose. Think of them as your toast toolkit, each with its own personality and superpower!

| Function               | Color  | Icon | Use Case                             |
| ---------------------- | ------ | ---- | ------------------------------------ |
| `QuickToast.info()`    | Blue   | ℹ️   | General information, tips, updates   |
| `QuickToast.success()` | Green  | ✅   | Successful operations, confirmations |
| `QuickToast.warning()` | Orange | ⚠️   | Warnings, attention needed           |
| `QuickToast.error()`   | Red    | ❌   | Errors, failures, issues             |
| `QuickToast.danger()`  | Red    | ❗   | Critical errors, security alerts     |

---

## ⚡ The Magic Formula :id=the-magic-formula

**One Pattern to Rule Them All** - Every function follows the exact same structure, making them incredibly predictable and easy to use:

```javascript
QuickToast.functionName(options);
```

**That's it!** No complex syntax, no hidden gotchas. Just pick your function, pass your options, and watch the magic happen. See **[Options](options.md)** for the complete configuration arsenal.

---

## 🎯 Live Examples :id=live-examples

### Basic Usage - The Foundation

**Start here if you're new to the toast game!**

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toasts</button>
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

### Advanced Usage - Level Up Your Toasts

**Now you're cooking with gas! Add titles, custom durations, and strategic positioning.**

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast with</button>
  </div>

```javascript
QuickToast.success({
  text: "Operation completed successfully!",
  title: "Success",
  duration: 5000,
  placement: "bottom-center",
});
```

</div>

---

## ⚔️ The Great Debate: Functions vs Constructor :id=functions-vs-constructor

**Choose Your Weapon Wisely** - Both approaches have their place, but knowing when to use each can make you a toast ninja!

### Function Shortcuts - The Swift Assassins

**Fast, deadly, and precise. Perfect for quick strikes when you know exactly what you want.**

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toasts</button>
  </div>

```javascript
// Simple and readable
QuickToast.info({ text: "Info message" });
QuickToast.success({ text: "Success message" });
QuickToast.warning({ text: "Warning message" });
```

</div>

---

### Main Constructor - The Versatile Warrior

**More powerful, more flexible, but requires more setup. Perfect for complex scenarios and dynamic type selection.**

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toasts</button>
  </div>

```javascript
// More verbose
QuickToast({ text: "Info message", type: "info" }).notify();
QuickToast({ text: "Success message", type: "success" }).notify();
QuickToast({ text: "Warning message", type: "warning" }).notify();
```

</div>

#### The Decision Matrix

**When to Use Functions:**

- **Fixed type** - You know exactly what kind of toast you want
- **Quick deployment** - Need a toast in 5 seconds or less
- **Readable code** - Want your team to understand it at a glance
- **Simple scenarios** - Basic notifications without complex logic

**When to Use Constructor:**

- **Dynamic types** - The type depends on runtime conditions
- **Complex logic** - Need to reuse options across different types
- **Advanced features** - Require fine-grained control over every aspect
- **Library building** - Creating your own toast wrapper functions

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toasts</button>
  </div>

```javascript
// **Pro Tip: Create Your Own Toast Factory**
// This pattern gives you the best of both worlds - function-like simplicity with constructor flexibility

function notify({ text, type = "info", ...rest }) {
  return QuickToast({ text, type, ...rest }).notify();
}

// **Usage Examples:**
notify({ text: "Saved!", type: "success" }); // Success notification
notify({ text: "Heads up", type: "warning", duration: 7000 }); // Warning with custom duration
notify({ text: "Uh oh", type: "error", close: false }); // Error that can't be closed
```

</div>

---

## 🎯 Pro Tips & Best Practices :id=pro-tips-best-practices

**Master These and You'll Be Unstoppable** - These aren't just suggestions, they're the secrets that separate toast amateurs from toast legends!

### Content Strategy

- **Choose the right function** - Match your message type to the function (don't use `error()` for a success message!)
- **Keep messages concise** - Toast messages should be scannable in under 2 seconds
- **Set appropriate duration** - Longer for important messages, shorter for quick confirmations

### User Experience

- **Use strategic positioning** - Different positions for different message types (top-center for alerts, bottom-right for confirmations)
- **Include actions when relevant** - Use `confirmButton` for notifications that require user input
- **Match your app's personality** - Use consistent styling and positioning across your application

---

## 🚀 Ready to Level Up? :id=ready-to-level-up

**Your Toast Journey Continues** - You've mastered the functions, now explore the full power of QuickToast!

### Next Steps in Your Quest

- **[Getting Started](getting-started.md)** - Master the basics and get your first toasts running
- **[Options](options.md)** - Discover the complete configuration arsenal at your disposal
- **[Events](events.md)** - Learn to listen to your toasts and react to their lifecycle
- **[Data API](data-api.md)** - Create toasts declaratively with HTML attributes

---

## You're Now a Function Master! 🎉 :id=function-master

**Congratulations!** You've just unlocked the power of one-line toast creation. From simple info messages to complex interactive notifications, you now have the tools to create any toast your application needs.

**Go forth and toastify the world!** 🚀
