import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/globals.css";
import { QueryPage } from "./pages/query.tsx";
import { Connect } from "./pages/connect.tsx";

const router = createBrowserRouter([
  {
    path: "connect",
    element: <Connect />,
  },
  {
    path: "/",
    element: <App />,
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
        element: <div>Data Page</div>,
      },
      {
        path: "structure/:id",
        element: <div>Structure Page</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
