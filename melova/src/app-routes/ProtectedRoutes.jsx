import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Settings from "../pages/Settings";
import ProductDetails from "../components/ProductDetails";

const ProtectedRoutes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />
  }
];

export default ProtectedRoutes;