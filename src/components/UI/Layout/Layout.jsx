import React, { useContext } from "react";
import theme from "../Global/Theme";
import AuthContext from "../../../utils/auth-context";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Global/Global.styled";

const Layout = (props) => {
  const { logout } = useContext(AuthContext);
  const logoutHandler = () => {
    localStorage.getItem("willExpire") <= new Date().getTime() && logout();
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div onClick={logoutHandler}>{props.children}</div>
    </ThemeProvider>
  );
};

export default Layout;
