import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../services/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  return user.accessToken ? children : <Navigate to="/" />;
};

export default PrivateRoute;
