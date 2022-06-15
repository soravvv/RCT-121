import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const [state] = useContext(AuthContext);

  if (state.auth) {
    return children;
  }

  return <Navigate to="/login" />;
};
