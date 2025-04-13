import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Main from "./Components/Main/Main.jsx";
import Header from "./Components/Header/Header.jsx";
import Navigation from "./Components/Navigation/Navigation.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Header },
      { path: "navigation", Component: Navigation },
      {
        path: "main",
        Component: Main,
      },
      {
        path: "app",
        Component: App,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
