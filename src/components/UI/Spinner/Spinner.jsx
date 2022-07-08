import React from "react";
import StyledSpinner from "./Spinner.styled";
import spinner from "../../../assets/ajax-loading-icon-19.jpg";
const Spinner = () => {
  return (
    <StyledSpinner>
      <h3>Loading...</h3>
      <img src={spinner} alt="spinner" />
    </StyledSpinner>
  );
};

export default Spinner;
