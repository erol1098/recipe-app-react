import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthForm from "../../components/Auth/AuthForm";
import AuthContext from "../../utils/auth-context";

const Login = () => {
  const { isLoggedIn } = useContext(AuthContext);
  if (isLoggedIn) return <Navigate to="/" />;
  return <AuthForm />;
};

export default Login;
