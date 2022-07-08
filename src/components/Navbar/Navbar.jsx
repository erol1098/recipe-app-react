import React from "react";
import StyledNav, { Logo } from "./Navbar.styled";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
const Navbar = () => {
  return (
    <StyledNav>
      <NavLink to="/">
        <Logo src={logo} />
      </NavLink>
      <ul>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="#">Github</NavLink>
        </li>
        <li>
          <NavLink to="#">Logout</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Navbar;
