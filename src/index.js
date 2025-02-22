import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router"; // 1 - First step
import MaterielUI from "./pages/Materiel-UI/Materiel-UI";
import Sourates from "./pages/Sourates/Sourates";
import Reciter from "./pages/Reciter/Reciter";
// 2 - Second step
const router = createBrowserRouter([
  {
    path: "/",
    element: <Sourates />,
  },
  {
    path: "/Materiel-UI",
    element: <MaterielUI />,
  },
  {
    path: "/Reciter",
    element: <Reciter />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* 3 - Third step */}
  </React.StrictMode>
);
