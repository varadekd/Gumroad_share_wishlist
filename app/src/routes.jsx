import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/products" />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "product/:id",
    element: <ProductDetail />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
