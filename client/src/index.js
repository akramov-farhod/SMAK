import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MenuItemsContextProvider } from "./context/MenuItemsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MenuItemsContextProvider>
      <App />
    </MenuItemsContextProvider>
  </React.StrictMode>
);
