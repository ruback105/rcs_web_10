import ReactDOM from "react-dom/client";
import RandomBeerPage from "./pages/random-beer";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import MoviesPage from "./pages/movies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/random-beer",
    element: <RandomBeerPage />,
  },
  {
    path: "/movies",
    element: <MoviesPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <DefaultLayout>
    <RouterProvider router={router} />
  </DefaultLayout>
);
