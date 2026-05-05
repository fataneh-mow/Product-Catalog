import ProtectedRoutes from "./ProtectedRoutes";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import AppLayout from "../layout/AppLayout";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        {ProtectedRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}

export default AppRoutes;