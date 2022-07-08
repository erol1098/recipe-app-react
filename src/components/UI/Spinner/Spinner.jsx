import React from "react";
import StyledSpinner from "./Spinner.styled";
import spinner from "../../../assets/ajax-loading-icon-19.jpg";
const Spinner = () => {
  return (
    <StyledSpinner>
      <img src={spinner} alt="spinner" />
    </StyledSpinner>
  );
};

export default Spinner;
