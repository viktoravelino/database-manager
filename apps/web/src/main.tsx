import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/globals.css";
import { QueryPage } from "./pages/query.tsx";
import { Connect } from "./pages/connect.tsx";
import { Dashboard } from "./pages/dashboard.tsx";
import React from "react";
import { Page } from "./pages/tableData.tsx";

const router = createBrowserRouter([
  {
    path: "connect",
    element: <Connect />,
  },
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <div>empty state</div>,
      },
      {
        path: "query/:id",
        element: <QueryPage />,
      },
      {
        path: "data/:id",
        element: <Page />,
      },
      {
        path: "structure/:id",
        element: <div>Structure Page</div>,
      },
    ],
  },
]);

// window.onunload = () => {
//   localStorage.clear();
// };

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
