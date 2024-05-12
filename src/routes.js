import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Details from "./pages/Details";

export const router = createBrowserRouter([
  {
    element: <Home />,
    path: "/",
    errorElement: <NotFound />,
  },
  {
    element: <About />,
    path: "/a-propos",
    errorElement: <NotFound />,
  },
  {
    element: <Details />,
    path: "/:id",
    errorElement: <NotFound />,
  },
]);
