import { createBrowserRouter } from "react-router-dom";

import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"
import Error from "./pages/Error"

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
