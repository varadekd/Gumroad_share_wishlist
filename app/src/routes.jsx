import React from "react";
import { createBrowserRouter } from "react-router-dom";

const Products = React.lazy(() => import("./pages/Products"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const Error = React.lazy(() => import("./pages/Error"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/:id",
    element: <ProductDetail />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
