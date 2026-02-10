import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import AllProjectsPage from "./pages/AllProjectsPage.tsx";

const routes = createBrowserRouter([
  {
    path: "/Portfolio",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "projects", element: <AllProjectsPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
);
