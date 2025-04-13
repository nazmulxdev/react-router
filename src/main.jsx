import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Main from "./Components/Main/Main.jsx";
import Header from "./Components/Header/Header.jsx";
import Navigation from "./Components/Navigation/Navigation.jsx";
import Users from "./Components/Users/Users.jsx";
import Comments from "./Components/Comments/Comments.jsx";
import UserDetails from "./Components/UserDetails/UserDetails.jsx";

const commentApi = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => res.json()
);

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
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "albums",
        loader: async () => {
          let albumApi = await fetch(
            "https://jsonplaceholder.typicode.com/albums"
          );
          return albumApi;
        },
        Component: Users,
      },
      {
        path: "users/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails, 
      },
      {
        path: "comments",
        element: (
          <Suspense fallback={<p>loading.....</p>}>
            <Comments commentApi={commentApi}></Comments>
          </Suspense>
        ),
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
