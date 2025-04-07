import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ComponentMaterialUi from "./components/cineColombia.jsx";
import Crud from "./components/Crud.jsx";
import CineMark from "./components/cineColombia.jsx";
import CineColombia from "./components/cineColombia.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Inicio",
    element: <div style={{ color: "red" }}>hola netflix</div>,
  },
  {
    path: "/Series",
    element: <div>hola netflix</div>,
  },
  {
    path: "/Peliculas",
    element: <div>hola netflix</div>,
  },

  {
    path: "/cineColombia",
    element: <CineColombia />,
  },
  {
    path: "/crud",
    element: <Crud />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
