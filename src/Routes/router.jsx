import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import Home from "../pages/Home/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,

    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/category/:id",
        loader: () => fetch("/data/news.json"),
        Component: CategoryNews,
      },
    ],
  },
]);
