import React, { useContext } from "react";
import StyledNav, { Logo } from "./Navbar.styled";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import AuthContext from "../../utils/auth-context";
import Recipes from "../../utils/recipes";
const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const { setMeals } = useContext(Recipes);
  return (
    <StyledNav>
      <NavLink to="/">
        <div>
          <Logo src={logo} onClick={() => setMeals("")} /> Recipe Master
        </div>
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
          {isLoggedIn && (
            <NavLink to="/">
              {" "}
              <button onClick={() => logout()}>Logout</button>
            </NavLink>
          )}
        </li>
      </ul>
    </StyledNav>
  );
};

export default Navbar;
