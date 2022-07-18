
import React from "react";
import { Navigate} from "react-router-dom";

export const ProtectedRoute = ({
    children,
    isAuth
}) => {
  return isAuth ? children : <Navigate to="/login" />;
};
