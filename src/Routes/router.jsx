import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import Home from "../pages/Home/Home";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import { Component } from "react";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/category/:id",
        loader: () => fetch("/data/news.json"),
        Component: CategoryNews,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
]);
