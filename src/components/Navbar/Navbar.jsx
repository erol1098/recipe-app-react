import React, { useContext, useState } from "react";
import StyledNav, {
  Logo,
  Button,
  Menu,
  Hamburger,
  Head,
} from "./Navbar.styled";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import AuthContext from "../../utils/auth-context";
import Recipes from "../../utils/recipes-context";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const { setMeals } = useContext(Recipes);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledNav>
      <Head>
        <NavLink to="/">
          <span
            onClick={() => {
              setIsOpen(false);
              setMeals("");
            }}
          >
            <Logo src={logo} /> Recipe Master
          </span>
        </NavLink>
        <Hamburger onClick={() => setIsOpen((prevState) => !prevState)}>
          <GiHamburgerMenu />
        </Hamburger>
      </Head>
      <Menu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <a
            href="https://github.com/erol1098/recipe-app-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          {!isLoggedIn && <NavLink to="login">Login</NavLink>}
          {isLoggedIn && (
            <Button
              onClick={() => {
                navigate("/goodbye");
                setMeals("");
                logout();
              }}
            >
              Logout
            </Button>
          )}
        </li>
      </Menu>
    </StyledNav>
  );
};

export default Navbar;
