import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import AuthLayout from "../layout/AuthLayout";


function AppRoutes() {
  return (
    <Routes>

      <Route element={<AuthLayout />}>
        {PublicRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
      </Route>

      <Route path="/" element={<AppLayout />}>
        {ProtectedRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}

export default AppRoutes;