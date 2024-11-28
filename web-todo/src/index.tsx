import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import { Helmet } from "react-helmet";
import App from "./App";

const rootEl = document.getElementById("root");

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
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
        <Helmet>
          <title>WebToDo</title>
        </Helmet>
        <App />
      </ConfigProvider>
    </React.StrictMode>
  );
}
