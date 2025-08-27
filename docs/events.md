# Events

QuickToast exposes lifecycle data via a global CustomEvent and onDestroy payload. Use these hooks to integrate analytics, logging, or custom logic.

## Global DOM event

QuickToast dispatches a global CustomEvent on `document` so you can observe removals without passing per-toast callbacks.

- Event name: `quickToast:destroy`
- Detail: `DestroyPayload` (same as `onDestroy`)

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
// Listen for any toast removal
function onToastDestroy(e) {
  const { reason, type, title, text, lifetimeMs, remainingToasts } = e.detail;
  alert(
    `[destroy] reason=${reason} type=${type} title=${title} lifetime=${lifetimeMs}ms left=${remainingToasts}`
  );

  // Example: react only to user-driven closes
  if (reason === "close_click" || reason === "dismiss_click") {
    // e.g., send analytics
  }
}

document.addEventListener("quickToast:destroy", onToastDestroy);

QuickToast({
  title: "Close me",
  text: "Click the X to close",
  duration: 0,
  alwaysVisible: true,
  onDestroy: (payload) => {
    console.log("toast destoyed");
  },
}).showToast();
```

</div>

---

## Programmatic removal events

You can request a toast to remove itself by dispatching a custom event on the toast node:

- Event name: `quickToast-remove`
- Effect: the toast removes itself (onDestroy/global fired with reason `quickToast-remove`)

### Example: remove a specific toast

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
const toastInstance = QuickToast({
  text: "This toast will be removed automatically in 3 seconds",
  alwaysVisible: true,
  rootClass: "remove-via-custom-event",
}).showToast();

QuickToast({
  text: "This toast will stay visible until manually closed",
  alwaysVisible: true,
}).showToast();

setTimeout(() => {
  const el = toastInstance.toastElement;
  if (el) el.dispatchEvent(new Event("quickToast-remove"));
}, 3000);
```

</div>

---

## Count and clear helpers

While not events, these are useful when coordinating logic:

- `QuickToast.count()` — number of active toasts
- `QuickToast.clear()` — remove all active toasts
- `instance.clear()` — remove just that instance (fires `onDestroy` with reason `clear_toast`)

### Count of Active Toast

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({ text: "One", alwaysvisible: true }).showToast();
QuickToast({ text: "Two", alwaysvisible: true }).showToast();
QuickToast({ text: "Three", alwaysvisible: true }).showToast();

setTimeout(() => {
  alert(`Active toasts: ${QuickToast.count()}`);
}, 3000);
```

</div>

---

### Clear all

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({ text: "One", alwaysvisible: true }).showToast();
QuickToast({ text: "Two", alwaysvisible: true }).showToast();
QuickToast({ text: "Three", alwaysvisible: true }).showToast();

setTimeout(() => {
  alert("Clearing all toasts...");
  QuickToast.clear();
}, 1000);
```

</div>

---

### Clear a single instance

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
const t = QuickToast({
  text: "Only This Toast will get destroyed",
  alwaysVisible: true,
  onDestroy: (p) => alert("Instance destroyed"),
}).showToast();
QuickToast({
  text: "This toast will be displayed forever",
  alwaysVisible: true,
}).showToast();
setTimeout(() => t.clear(), 1500);
```

</div>
