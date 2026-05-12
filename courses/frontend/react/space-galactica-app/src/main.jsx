import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import DestinationPage from "./pages/DestinationPage/DestinationPage.jsx";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage.jsx";
import NasaCollaboration from "./pages/NasaCollaborationPage/NasaCollaborationPage.jsx";
import CartPage from "./pages/CheckoutPage/CartPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegisterPage from "./pages/LoginPage/RegisterPage.jsx";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage.jsx";
import OrdersPage from "./pages/CheckoutPage/OrdersPage.jsx";

import { CartProvider } from "./context/CartContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

import "./main.css";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/destination",
        element: <DestinationPage />,
      },
      {
        path: "/about_us",
        element: <AboutUsPage />,
      },
      {
        path: "/nasa_collaboration",
        element: <NasaCollaboration />,
      },

      {
        path: "/cart",
        element: <CartPage />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/register",
        element: <RegisterPage />
      },
      {
        path: "/checkout",
        element: <CheckoutPage />
      },
      {
        path: "/orders",
        element: <OrdersPage />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
);