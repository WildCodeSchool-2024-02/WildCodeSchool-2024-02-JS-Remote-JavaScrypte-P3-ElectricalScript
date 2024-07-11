import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import ConnexionPage from "./pages/ConnexionPage";
import RegisterCarPage from "./pages/RegisterCarPage";
import MapPage from "./pages/MapPage";
import AdminPage from "./pages/AdminPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/connexion",
        element: <ConnexionPage />,
      },
      {
        path: "/landing",
        element: <LandingPage />,
      },
      {
        path: "/map",
        element: <MapPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/registerCar",
        element: <RegisterCarPage />,
      },
      {
        path: "/admin",
        element: <AdminPage/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
