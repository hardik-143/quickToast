# Declarative Actions (Data-API)

QuickToast supports attribute-driven actions inside any provided `text` (HTML) or `node` content. This lets you wire behavior without extra JavaScript.

## Attributes

- `data-dismiss-self="true"`: closes the containing toast when clicked
- `data-confirm-click="true"`: triggers the confirm action (same as clicking the confirm button)

> Works for both HTML strings (when `escapeMarkup: true`) and real DOM nodes via `node`.

---

## Examples

### Dismiss self (close toast)

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  title: "Action inside content",
  text: '<button data-dismiss-self="true">Close this toast</button>',
  escapeMarkup: true,
  alwaysVisible: true,
}).notify();
```

</div>

### Confirm click (run onConfirm)

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
QuickToast({
  title: "Inline confirm",
  showConfirmButton: true,
  confirmButtonText: "Confirm",
  onConfirm: () => alert("Confirmed!"),
  text: '<a href="/data-api" data-confirm-click="true">Confirm via link</a>',
  escapeMarkup: true,
}).notify();
```

</div>

---

## Using DOM nodes

<div class="code-wrapper">
  <div>
  <button data-quicktoast>Show Toast</button>
  </div>

```javascript
const el = document.createElement("div");
el.innerHTML =
  '<span>Custom content</span> <button data-dismiss-self="true">Dismiss</button>';

QuickToast({
  node: el,
  alwaysVisible: true,
  close: false,
}).notify();
```

</div>

---

## Notes

- Events are automatically delegated within the toast content.
- Multiple elements can carry these attributes in the same toast.
- `data-confirm-click="true"` respects your `onConfirm` behavior, including async handlers and `closeAfterOnConfirm`.
- `data-dismiss-self="true"` mirrors the close button semantics and will pass reason `dismiss_click` to `onDestroy`.

## Accessibility tips

- Prefer `<button>` over `<a href="#">` for actions.
- Provide clear text for screen readers (e.g., "Dismiss notification").
- Ensure focus styles are visible for keyboard users.
