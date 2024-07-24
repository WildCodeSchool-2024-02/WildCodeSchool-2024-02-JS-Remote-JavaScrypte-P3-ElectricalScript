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
import ReservationPage from "./pages/ReservationPage";
import MapPage from "./pages/MapPage";
import ContactPage from "./pages/ContactPage";
import Cars from "./components/admin/Cars";
import Stations from "./components/admin/Stations";
import UserProfilPage from "./pages/UserProfilPage";
import RegisteredUsers from "./components/admin/RegisteredUsers";
import AdminPage from "./pages/AdminPage";
import NavbarDesktop from "./components/NavbarDesktop";
import LegaleNoticePage from "./pages/LegaleNocitePage";

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
        element: <AdminPage />,
      },
      {
        path: "/reservation/:name",
        element: <ReservationPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/cars",
        element: <Cars />,
      },
      {
        path: "/stations",
        element: <Stations />,
      },
      {
        path: "/profil",
        element: <UserProfilPage />,
      },
      {
        path: "/registeredusers",
        element: <RegisteredUsers />,
      },
      {
        path: "/navbarDesktop",
        element: <NavbarDesktop />,
      },
      {
        path: "/rgpd",
        element: <LegaleNoticePage />,
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
