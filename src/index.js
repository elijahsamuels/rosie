import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

// Suppress benign cross-origin "Script error." from social media embeds in development
window.addEventListener('error', (event) => {
  if (event.message === 'Script error.') {
    event.stopImmediatePropagation();
    event.preventDefault();
  }
}, true); // Use capture phase to intercept before React's error overlay

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
