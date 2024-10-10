import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import "regenerator-runtime/runtime";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FunkoForm } from "./components/FunkoForm";
import { Home } from "./components/Home";
import { App } from "./components/App";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/funkopops", element: <App /> },
  { path: "/funkoForm", element: <FunkoForm /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
