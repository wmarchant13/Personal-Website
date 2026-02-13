import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Prevent body scrolling — content scrolls inside its own container
document.body.style.overflow = "hidden";
document.documentElement.style.overflow = "hidden";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
