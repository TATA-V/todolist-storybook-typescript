import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Store";

const rootEl = document.getElementById("root");

if (!rootEl) {
  throw new Error("Cannet find root element");
}

const root = ReactDOM.createRoot(rootEl);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
