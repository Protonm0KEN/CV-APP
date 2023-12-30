import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/global-styles/globals.scss";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
