// Demo Component
function Demo() {
  const toast = useQuickToast();

  const showCustomNode = () => {
    const customNode = (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src="https://picsum.photos/50" style={{ borderRadius: "25px" }} />
        <div>
          <strong>Custom Node Example</strong>
          <p style={{ margin: "5px 0 0" }}>
            This is a custom React node in toast!
          </p>
        </div>
      </div>
    );

    toast.show({
      node: customNode,
      duration: 5000,
      progress: true,
      stopOnHover: true,
    });
  };

  const showConfirmToast = () => {
    toast.show({
      type: "warning",
      title: "Confirm Action",
      text: "Are you sure you want to proceed?",
      showConfirmButton: true,
      confirmButtonText: "Yes, proceed",
      onConfirm: () => {
        toast.success({
          text: "Action confirmed!",
          duration: 2000,
        });
      },
      alwaysVisible: true,
    });
  };

  const showNavigationToast = () => {
    toast.info({
      text: "Click to visit GitHub",
      destination: "https://github.com/hardik-143/quickToast",
      newWindow: true,
      duration: 5000,
      confirmBeforeNav: true,
    });
  };

  const showProgressToast = () => {
    toast.show({
      type: "info",
      title: "Processing...",
      text: "This toast shows progress and pauses on hover",
      duration: 5000,
      progress: true,
      stopOnHover: true,
    });
  };

  return (
    <div className="demo-container">
      <h1>QuickToast React Demo</h1>

      <div className="demo-section">
        <h2>Basic Types</h2>
        <div className="button-group">
          <button
            className="info-btn"
            onClick={() => toast.info({ text: "Info message" })}
          >
            Info Toast
          </button>
          <button
            className="success-btn"
            onClick={() => toast.success({ text: "Success message" })}
          >
            Success Toast
          </button>
          <button
            className="warning-btn"
            onClick={() => toast.warning({ text: "Warning message" })}
          >
            Warning Toast
          </button>
          <button
            className="error-btn"
            onClick={() => toast.error({ text: "Error message" })}
          >
            Error Toast
          </button>
          <button
            className="danger-btn"
            onClick={() => toast.danger({ text: "Danger message" })}
          >
            Danger Toast
          </button>
        </div>
      </div>

      <div className="demo-section">
        <h2>Advanced Features</h2>
        <div className="button-group">
          <button className="custom-btn" onClick={showCustomNode}>
            Custom Node
          </button>
          <button className="custom-btn" onClick={showConfirmToast}>
            Confirmation
          </button>
          <button className="custom-btn" onClick={showNavigationToast}>
            Navigation
          </button>
          <button className="custom-btn" onClick={showProgressToast}>
            Progress
          </button>
        </div>
      </div>

      <div className="demo-section">
        <h2>Utility Functions</h2>
        <div className="button-group">
          <button
            onClick={() => {
              Array(3)
                .fill()
                .forEach((_, i) => {
                  setTimeout(() => {
                    toast.info({ text: `Toast ${i + 1}` });
                  }, i * 300);
                });
            }}
          >
            Stack Multiple
          </button>
          <button onClick={() => toast.clear()}>Clear All</button>
          <button onClick={() => alert(`Active toasts: ${toast.count()}`)}>
            Count Toasts
          </button>
        </div>
      </div>

      <div className="demo-section">
        <h2>Custom Positioning</h2>
        <div className="button-group">
          <button
            onClick={() =>
              toast.info({
                text: "Top Left Toast",
                position: "left",
                gravity: "top",
              })
            }
          >
            Top Left
          </button>
          <button
            onClick={() =>
              toast.info({
                text: "Top Center Toast",
                position: "center",
                gravity: "top",
              })
            }
          >
            Top Center
          </button>
          <button
            onClick={() =>
              toast.info({
                text: "Bottom Right Toast",
                position: "right",
                gravity: "bottom",
              })
            }
          >
            Bottom Right
          </button>
        </div>
      </div>
    </div>
  );
}

// App Component with Provider
function App() {
  return (
    <QuickToastProvider>
      <Demo />
    </QuickToastProvider>
  );
}

// Render the app
ReactDOM.render(<App />, document.getElementById("root"));
