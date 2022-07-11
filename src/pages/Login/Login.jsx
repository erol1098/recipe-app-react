import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AuthForm from "../../components/Auth/AuthForm";
import Modal from "../../components/UI/Modal/Modal";
import AuthContext from "../../utils/auth-context";
import StyledLogin from "./Login.styled";

const Login = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  if (
    new Date().getTime() - (+localStorage.getItem("willExpire") - 3600000) >
      0 &&
    new Date().getTime() - (+localStorage.getItem("willExpire") - 3600000) < 500
  )
    return (
      <Modal
        title={"Succesful Login"}
        message={"Enjoy the app!"}
        onConfirm={(e) => {
          navigate(-1);
        }}
      />
    );

  if (isLoggedIn) return <Navigate to="/" />;
  return (
    <StyledLogin>
      <AuthForm />
    </StyledLogin>
  );
};

export default Login;
