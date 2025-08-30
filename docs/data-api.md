# 💥 Declarative Actions (Data-API) :id=declarative-actions-data-api

**🔌 Wire Up Your Toasts Without Writing a Single Line of JavaScript!** Transform your HTML content into interactive powerhouses using simple data attributes. Watch as your toasts become self-aware and handle their own destiny with just a few magical attributes! ✨

## 🎯 Available Attributes :id=available-attributes

- `data-dismiss-self="true"` - **Self-Destruct Button**: Makes any element close its own toast when clicked
- `data-confirm-click="true"` - **Action Trigger**: Makes any element act like the confirm button

<div class="blockquote-orange blockquote-wrapper">

!> **Pro Tip**: These work with both HTML strings (when `escapeMarkup: true`) and real DOM nodes via `node`. It's like giving your HTML superpowers! ✨

</div>

---

## 📝 Examples :id=examples

### Self-Destruct Button (Close Toast)

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast with Close Button</button>
  </div>

```javascript
QuickToast.warning({
  title: "Interactive Content",
  text: '<button data-dismiss-self="true">🚪 Close this toast</button>',
  escapeMarkup: true,
  alwaysVisible: true,
});
```

</div>

**What happens**: Click the button inside the toast and watch it disappear! Perfect for letting users close toasts from anywhere within the content.

### Action Trigger (Run onConfirm)

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast with Action Link</button>
  </div>

```javascript
QuickToast({
  title: "Inline Actions",
  showConfirmButton: true,
  confirmButtonText: "Confirm",
  onConfirm: () => alert("🎉 Action confirmed!"),
  text: '<a href="javascript:;" data-confirm-click="true">🔗 Click here to confirm</a>',
  escapeMarkup: true,
}).notify();
```

</div>

**What happens**: Click the link inside the toast and it triggers the same action as the confirm button! Great for making any element interactive.

---

## 🎨 Using Real DOM Elements :id=using-real-dom-elements

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast with Custom DOM</button>
  </div>

```javascript
const el = document.createElement("div");
el.innerHTML =
  '<span>🎨 Custom content</span> <button data-dismiss-self="true">🚪 Dismiss</button>';

QuickToast({
  node: el,
  alwaysVisible: true,
  close: false,
}).notify();
```

</div>

**What happens**: Create complex HTML structures in JavaScript and still use data attributes! Perfect for dynamic content that needs interactive elements.

---

## 💡 How It Works :id=how-it-works

- **Event Delegation**: Events are automatically handled within the toast content - no manual binding needed!
- **Multiple Elements**: You can have several interactive elements in the same toast - they all work together!
- **Smart Confirm**: `data-confirm-click="true"` respects all your `onConfirm` settings, including async handlers and `closeAfterOnConfirm`.
- **Consistent Behavior**: `data-dismiss-self="true"` works exactly like the close button and passes `dismiss_click` to `onDestroy`.

## ♿ Accessibility Best Practices :id=accessibility-best-practices

- **Use Semantic Elements**: Prefer `<button>` over `<a href="#">` for actions - it's more accessible!
- **Clear Descriptions**: Provide descriptive text for screen readers (e.g., "Dismiss notification" instead of just "Close").
- **Keyboard Friendly**: Ensure focus styles are visible for keyboard navigation users.
- **Test with Screen Readers**: Always test your interactive toasts with accessibility tools!
