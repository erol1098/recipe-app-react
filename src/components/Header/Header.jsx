import React from "react";
import Navbar from "../Navbar/Navbar";
import Form from "./Form";
import StyledHeader from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Navbar />
      <Form />
    </StyledHeader>
  );
};

export default Header;
