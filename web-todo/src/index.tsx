import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { ConfigProvider } from "antd";
import { Home } from "./pages/Home";

const rootEl = document.getElementById("root");

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    // <React.StrictMode>
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: "#ffffff",
            // bodyBg: "#ffffff",
          },
        },
        token: {
          colorPrimary: "#000000",
        },
      }}
    >
      <App />
    </ConfigProvider>
    // </React.StrictMode>
  );
}
