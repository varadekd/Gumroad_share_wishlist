import React from "react";
import { createBrowserRouter } from "react-router-dom";

const Products = React.lazy(() => import("./pages/Products"));
const Error = React.lazy(() => import("./pages/Error"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
