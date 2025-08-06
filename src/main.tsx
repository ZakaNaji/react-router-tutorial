import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import {
  loader as rootLoader,
  action as rootAction,
} from "./routes/rootLoadersAndActions";
import {
  loader as contactLoader,
  destroy,
  updateAction,
} from "./routes/contactLoadersAndActions";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import EditContact from "./routes/edit_contact";
import Index from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:id",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:id/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: updateAction,
      },
      {
        path: "contacts/:id/destroy",
        action: destroy,
        errorElement: <div>Somthing went wrong</div>,
      },
      {
        index: true,
        element: <Index />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
