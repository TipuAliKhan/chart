import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Check React version and use appropriate rendering method
if (ReactDOM.createRoot) {
  // React 18+
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
} else {
  // React 16/17
  ReactDOM.render(<App />, document.getElementById("root"));
}
