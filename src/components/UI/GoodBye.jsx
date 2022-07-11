import React, { useContext } from "react";
import Modal from "./Modal/Modal";
import { useNavigate, Navigate } from "react-router-dom";
import AuthContext from "../../utils/auth-context";
const GoodBye = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      {!isLoggedIn && (
        <Modal
          title={"Log Out"}
          message={"We will miss you!"}
          onConfirm={() => {
            navigate("/");
          }}
        />
      )}
      {isLoggedIn && <Navigate to="/" />}
    </>
  );
};

export default GoodBye;
