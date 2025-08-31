# 🎭 Events :id=events

**The Drama Behind Every Toast** - Watch your notifications perform their entire lifecycle on the DOM stage! From their grand entrance to their dramatic exit, every moment is captured and broadcasted for your entertainment and debugging pleasure. 🎪

## Global DOM events

| Event                     | Description                                               | Use Case                                  |
| ------------------------- | --------------------------------------------------------- | ----------------------------------------- |
| **Lifecycle Events**      |                                                           |                                           |
| `quickToast:show`         | Show method called for the toast                          | Track toast creation attempts             |
| `quickToast:inserted`     | Toast inserted into DOM (before visible)                  | DOM manipulation, pre-animation setup     |
| `quickToast:shown`        | Toast became visible (after CSS transition)               | Post-animation actions, user engagement   |
| **Timer Events**          |                                                           |                                           |
| `quickToast:progress`     | Progress bar updates `{ ratio, remainingMs, durationMs }` | Real-time progress tracking               |
| `quickToast:pause`        | Timer paused on hover `{ remainingMs, durationMs }`       | User interaction analytics                |
| `quickToast:resume`       | Timer resumed after hover `{ remainingMs, durationMs }`   | User interaction analytics                |
| `quickToast:timeout`      | Auto-dismiss due to elapsed duration                      | Auto-close tracking, user behavior        |
| **Removal Events**        |                                                           |                                           |
| `quickToast:hide`         | Hide begins; includes removal reason and timing           | Pre-removal actions, cleanup              |
| `quickToast:destroy`      | Toast removed from DOM; canonical post-removal event      | **Primary event for cleanup & analytics** |
| **System Events**         |                                                           |                                           |
| `quickToast:count-change` | Number of active toasts changed `{ active }`              | Toast queue management, UI updates        |

<div class="blockquote-orange blockquote-wrapper">

!> **Pro Tip**: Think of these events as your toast's personal reality show! You can spy on every moment - from their dramatic entrance (`quickToast:show`) to their tearful goodbye (`quickToast:destroy`). Perfect for analytics, debugging, or just satisfying your inner nosy neighbor! 🕵️‍♂️

</div>

## Lifecycle Events

### Show Event - The Grand Entrance <!-- {docsify-ignore} -->

**When the curtain rises** - Track every toast creation attempt

<div class="code-wrapper">
  <div>
  <button data-quicktoast=":show">Show Toast</button>
  </div>

```javascript
document.addEventListener("quickToast:show", (e) => {
  console.log("🎬 Toast is about to make its entrance:", e.detail);
});

QuickToast({
  text: "Watch the console for the show event!",
  type: "info",
  alwaysVisible: true,
}).notify();
```

</div>

---

### Inserted Event - Backstage Setup <!-- {docsify-ignore} -->

**DOM insertion complete** - Perfect for pre-animation setup and DOM manipulation

<div class="code-wrapper">
  <div>
  <button data-quicktoast=":inserted">Show Toast</button>
  </div>

```javascript
document.addEventListener("quickToast:inserted", (e) => {
  console.log("🎪 Toast has entered the DOM stage:", e.detail.toastElement);
  // Perfect place for DOM manipulation before animation
});

QuickToast({
  text: "I'm backstage, setting up for my big moment!",
  alwaysVisible: true,
}).notify();
```

</div>

---

### Shown Event - The Spotlight <!-- {docsify-ignore} -->

**Curtain call complete** - Post-animation actions and user engagement tracking

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
document.addEventListener("quickToast:shown", (e) => {
  console.log("✨ Toast is now in the spotlight:", e.detail);
  // Great for analytics and post-animation actions
});

QuickToast({
  text: "I'm visible and ready to perform!",
  type: "success",
  alwaysVisible: true,
  style: { transitionDuration: "1s" },
}).notify();
```

</div>

---

## Timer Events

### Progress Event - Real-time Countdown <!-- {docsify-ignore} -->

**Live progress tracking** - Get updates every 100ms while progress bar is active

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast with Progress</button>
  </div>

```javascript
document.addEventListener("quickToast:progress", (e) => {
  const { ratio, remainingMs, durationMs } = e.detail;
  console.log(
    `⏳ Progress: ${(ratio * 100).toFixed(1)}% | ${remainingMs}ms remaining`
  );
});

QuickToast({
  text: "Watch the progress in console!",
  duration: 5000,
  progress: true,
  stopOnHover: true,
}).notify();
```

</div>

---

### Pause/Resume Events - User Interaction <!-- {docsify-ignore} -->

**⏸Hover to pause, leave to resume** - Track user engagement with your toasts

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
document.addEventListener("quickToast:pause", (e) => {
  const { remainingMs, durationMs } = e.detail;
  console.log(`⏸️ Timer paused! ${remainingMs}ms saved`);
});
document.addEventListener("quickToast:resume", (e) => {
  const { remainingMs, durationMs } = e.detail;
  console.log(`▶️ Timer resumed! ${remainingMs}ms left to go`);
});

QuickToast({
  text: "Hover over me to pause, leave to resume!",
  duration: 5000,
  progress: true,
  stopOnHover: true,
}).notify();
```

</div>

---

### Timeout Event - Auto-Dismiss <!-- {docsify-ignore} -->

**Natural expiration** - Track when toasts auto-close due to time

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
document.addEventListener("quickToast:timeout", (e) => {
  const { type, title, text, lifetimeMs, remainingToasts } = e.detail;
  console.log(
    `⏰ Toast timed out after ${lifetimeMs}ms | ${remainingToasts} toasts left`
  );
});

QuickToast({
  text: "I'll auto-close in 2 seconds!",
  duration: 2000,
}).notify();
```

</div>

---

## Removal Events

### Hide Event - The Exit Begins <!-- {docsify-ignore} -->

**Curtain call starts** - Pre-removal actions and cleanup preparation

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
document.addEventListener("quickToast:hide", (e) => {
  console.log("🚪 Toast is starting its exit:", e.detail.reason);
  // Perfect for pre-removal cleanup
});

QuickToast({
  text: "I'm about to leave - check the console!",
  type: "warning",
  duration: 3000,
}).notify();
```

</div>

---

### Destroy Event - The Final Curtain <!-- {docsify-ignore} -->

**Post-show cleanup** - **Primary event for cleanup & analytics** - Use this for all post-removal logic

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
document.addEventListener("quickToast:destroy", (e) => {
  const { reason, type, title, text, lifetimeMs, remainingToasts } = e.detail;
  console.log(
    `🎭 Toast destroyed! Reason: ${reason} | Lifetime: ${lifetimeMs}ms | ${remainingToasts} toasts remaining`
  );

  // Perfect for analytics and cleanup
  if (reason === "close_click" || reason === "dismiss_click") {
    console.log("👤 User manually closed this toast");
  }
});

QuickToast({
  title: "Close me manually",
  text: "Click the X to see the destroy event",
  alwaysVisible: true,
}).notify();
```

</div>

---

## System Events

### Count Change Event - Queue Management <!-- {docsify-ignore} -->

**Active toast counter** - Track changes in your toast queue

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Multiple Toasts</button>
  </div>

```javascript
document.addEventListener("quickToast:count-change", (e) => {
  console.log(`📊 Toast count changed: ${e.detail.active} active toasts`);
});

// Show multiple toasts to see count changes
QuickToast.success({ text: "First toast", alwaysVisible: true });
QuickToast.warning({ text: "Second toast", alwaysVisible: true });
QuickToast.error({ text: "Third toast", alwaysVisible: true });

setTimeout(() => {
  console.log("Current count:", QuickToast.count());
}, 1000);
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
}).notify();

QuickToast({
  text: "This toast will stay visible until manually closed",
  alwaysVisible: true,
}).notify();

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
QuickToast({ text: "One", alwaysvisible: true }).notify();
QuickToast({ text: "Two", alwaysvisible: true }).notify();
QuickToast({ text: "Three", alwaysvisible: true }).notify();

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
QuickToast({ text: "One", alwaysvisible: true }).notify();
QuickToast({ text: "Two", alwaysvisible: true }).notify();
QuickToast({ text: "Three", alwaysvisible: true }).notify();

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
}).notify();
QuickToast({
  text: "This toast will be displayed forever",
  alwaysVisible: true,
}).notify();
setTimeout(() => t.clear(), 1500);
```

</div>
