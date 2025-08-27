# Events

QuickToast exposes lifecycle data via a global CustomEvent and onDestroy payload. Use these hooks to integrate analytics, logging, or custom logic.

## Global DOM events

| Event                     | Description                                                                         |
| ------------------------- | ----------------------------------------------------------------------------------- |
| `quickToast:show`         | when show method has been called for the toast                                      |
| `quickToast:inserted`     | toast inserted into the DOM (before visible)                                        |
| `quickToast:shown`        | toast became visible (after CSS show transition begins)                             |
| `quickToast:hide`         | hide begins; includes removal reason and timing                                     |
| `quickToast:hidden`       | toast removed; prefer `quickToast:destroy` for post-removal                         |
| `quickToast:destroy`      | toast removed from DOM; canonical post-removal event                                |
| `quickToast:timeout`      | auto-dismiss due to elapsed duration                                                |
| `quickToast:count-change` | number of active toasts changed `{ active }`                                        |
| `quickToast:progress`     | periodic updates while progress bar is enabled `{ ratio, remainingMs, durationMs }` |
| `quickToast:pause`        | hover paused the timer `{ remainingMs, durationMs }`                                |
| `quickToast:resume`       | hover resumed the timer `{ remainingMs, durationMs }`                               |

### Destroy Event

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
  console.log("e", e);
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

### Timeout event

QuickToast also dispatches a global event when a toast auto-dismisses due to elapsed duration.

- Event name: `quickToast:timeout`
- Detail: `DestroyPayload` with `reason: "timeout"`

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
// Listen for auto-dismisses only
document.addEventListener("quickToast:timeout", (e) => {
  const { type, title, text, lifetimeMs, remainingToasts } = e.detail;
  console.log(
    `[timeout] ${type} lifetime=${lifetimeMs}ms left=${remainingToasts}`
  );
});

QuickToast({ text: "Will auto close", duration: 1000 }).showToast();
```

</div>

---

### Count change event

Fires whenever the number of active toasts changes (after insertion and after removal).

- Event name: `quickToast:count-change`
- Detail: `{ active: number }`

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Open Console and Check Logs</button>
  </div>

```javascript
document.addEventListener("quickToast:count-change", (e) => {
  console.log("Active toasts:", e.detail.active);
});

QuickToast({
  text: "Remove the toast and check console",
  type: "warning",
  alwaysVisible: true,
}).showToast();
QuickToast({
  text: "Remove the toast and check console",
  type: "danger",
  alwaysVisible: true,
}).showToast();
QuickToast({
  text: "Remove the toast and check console",
  alwaysVisible: true,
}).showToast();
setTimeout(() => QuickToast.success({ text: "Check the count" }), 500);
setTimeout(() => QuickToast.warning({ text: "Check the count" }), 1000);
setTimeout(() => QuickToast.error({ text: "Check the count" }), 1500);
```

</div>

---

### Progress event

Fires periodically while the progress bar is enabled and the toast is counting down.

- Event name: `quickToast:progress`
- Detail: `{ ratio, remainingMs, durationMs }`

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Open Console and Check Logs</button>
  </div>

```javascript
document.addEventListener("quickToast:progress", (e) => {
  const { ratio, remainingMs, durationMs } = e.detail;
  console.log(
    `ratio=${ratio.toFixed(2)} remaining=${remainingMs}ms / ${durationMs}ms`
  );
});

QuickToast({
  text: "Check Console and Hover over me",
  duration: 5000,
  progress: true,
  stopOnHover: true,
}).showToast();
```

</div>

---

### Show/Shown events

Emitted around the visibility lifecycle:

- `quickToast:show`: when show method has been called for the toast
- `quickToast:shown`: toast has become visible after the show transition begins

- Detail: `{ type, title?, text?, node?, toastElement }`

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Open Console and Check Logs</button>
  </div>

```javascript
document.addEventListener("quickToast:show", (e) => {
  console.log("[show]", e.detail);
});
document.addEventListener("quickToast:shown", (e) => {
  console.log("[shown]", e.detail);
});

QuickToast({
  text: "Hey There!!",
  type: "warning",
  alwaysVisible: true,
  style: {
    transitionDuration: "1s",
  },
}).showToast();
```

</div>

---

### Inserted event

Fired when a toast has just been inserted into the DOM (prior to becoming visible).

- Event name: `quickToast:inserted`
- Detail: `{ type, title?, text?, node?, toastElement }`

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Open Console and Check Logs</button>
  </div>

```javascript
document.addEventListener("quickToast:inserted", (e) => {
  console.log("[inserted]", e.detail.toastElement, e.detail);
});

QuickToast({ text: "Inserted demo", alwaysVisible: true }).showToast();
```

</div>

---

### Hide

Fired when a toast starts hiding (`hide`)

- Event names: `quickToast:hide`
- Detail: `DestroyPayload`

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Open Console and Check Logs</button>
  </div>

```javascript
document.addEventListener("quickToast:hide", (e) => {
  console.log("[hide]", e.detail.reason, e.detail);
});

QuickToast({
  text: "Check console when I'm getting hidden",
  type: "info",
  // alwaysVisible: true,
  // style: {
  //   transitionDuration: "1s",
  // },
}).showToast();
```

</div>

!> There is no separate `quickToast:hidden` event required. Use `quickToast:destroy` for post-removal logic; it provides the same payload and semantics when the toast has been removed from the DOM.

---

### Pause/Resume events

Fired when hover pauses or resumes the auto-dismiss timer.

- Event names: `quickToast:pause`, `quickToast:resume`
- Detail: `{ remainingMs, durationMs }`

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
document.addEventListener("quickToast:pause", (e) => {
  const { remainingMs, durationMs } = e.detail;
  console.log(`[pause] remaining=${remainingMs} / ${durationMs}`);
});
document.addEventListener("quickToast:resume", (e) => {
  const { remainingMs, durationMs } = e.detail;
  console.log(`[resume] remaining=${remainingMs} / ${durationMs}`);
});

QuickToast({
  text: "Hover to pause, leave to resume",
  duration: 5000,
  progress: true,
  stopOnHover: true,
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
