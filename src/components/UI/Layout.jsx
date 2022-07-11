import React, { useContext } from "react";
import AuthContext from "../../utils/auth-context";
const Layout = (props) => {
  const { logout } = useContext(AuthContext);
  const logoutHandler = (e) => {
    localStorage.getItem("willExpire") >=
      new Date().getTime().toLocaleString() && logout();
  };
  return <div onClick={logoutHandler}>{props.children}</div>;
};

export default Layout;
