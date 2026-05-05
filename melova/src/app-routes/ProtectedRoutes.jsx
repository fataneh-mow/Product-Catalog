import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Settings from "../pages/Settings";

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
];

export default ProtectedRoutes;