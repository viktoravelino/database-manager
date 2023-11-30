import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/globals.css";
import { QueryPage } from "./pages/query.tsx";


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
        path: "query/:id",
        element: <QueryPage />,
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
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
