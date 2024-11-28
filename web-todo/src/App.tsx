import "./App.css";
import { Layout } from "antd";
import Cookie from "js-cookie";
import { Header } from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";

const loader = async () => {
  const token = Cookie.get("assess_token");
  console.log("window.location.pathname", token, window.location.pathname);
  if (!token && window.location.pathname !== "/auth/login") {
    return (location.href = "/auth/login");
  } else if (token && window.location.pathname === "/auth/login") {
    return (location.href = "/");
  } else {
    return null;
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader,
  },
  {
    path: "/auth/login",
    element: <Auth />,
    loader,
  },
]);
const App = () => {
  return (
    <Layout className="content">
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Content
        style={{
          padding: "0 80px",
        }}
      >
        <RouterProvider router={router} />
      </Layout.Content>
    </Layout>
  );
};

export default App;
