import React, { useContext } from "react";
import StyledNav, { Logo } from "./Navbar.styled";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import AuthContext from "../../utils/auth-context";
import Recipes from "../../utils/recipes";
const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const { setMeals } = useContext(Recipes);
  const navigate = useNavigate();
  return (
    <StyledNav>
      <NavLink to="/">
        <div onClick={() => setMeals("")}>
          <Logo src={logo} /> Recipe Master
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
            <button
              onClick={() => {
                navigate("/goodbye");
                setMeals("");
                logout();
              }}
            >
              Logout
            </button>
          )}
        </li>
      </ul>
    </StyledNav>
  );
};

export default Navbar;
