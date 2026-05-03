import Cart from "../pages/Cart";
import Products from "../pages/Products";
import Settings from "../pages/Settings";

const ProtectedRoutes = [
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