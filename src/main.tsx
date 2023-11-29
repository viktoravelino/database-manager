import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/globals.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <div>empty state</div>,
        // children: [
        //   {
        //     path: ":id",
        //     element: <div>Home</div>,
        //   },
        // ],
      },
      {
        path: "query",
        element: <div>Query Page</div>,
        children: [
          {
            path: ":id",
            element: <div>Query Page</div>,
          },
        ],
      },
      {
        path: "data",
        element: <div>Data Page</div>,
        children: [
          {
            path: ":id",
            element: <div>Data Page</div>,
          },
        ],
      },
      {
        path: "structure",
        element: <div>Structure Page</div>,
        children: [
          {
            path: ":id",
            element: <div>Structure Page</div>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
