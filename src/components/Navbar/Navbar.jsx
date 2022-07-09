import React, { useContext } from "react";
import StyledNav, { Logo } from "./Navbar.styled";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import AuthContext from "../../utils/auth-context";
const Navbar = () => {
  const { isLoggedIn } = useContext(AuthContext);
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
          <a
            href="https://github.com/erol1098"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          {!isLoggedIn && <NavLink to="login">Login</NavLink>}
          {isLoggedIn && <NavLink to="/">Logout</NavLink>}
        </li>
      </ul>
    </StyledNav>
  );
};

export default Navbar;
