import React from "react";
import StyledNotFound from "./NotFound.styled";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <StyledNotFound>
      <h2>404</h2>
      <h3>Page not found</h3>
      <div>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </StyledNotFound>
  );
};

export default NotFound;
