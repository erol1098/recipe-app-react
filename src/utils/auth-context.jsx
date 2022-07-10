import { createContext, useState } from "react";
const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(document.cookie.slice(6));
  const userIsLoggedIn = !!token;

  const loginHandler = (token, expires) => {
    setToken(token);
    document.cookie = `token=${token}; expires=${new Date(
      new Date().getTime() + +expires * 1000
    )}`;
    setTimeout(logoutHandler, expires * 1000);
  };
  const logoutHandler = () => {
    setToken(null);
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };

  const values = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
};
export default AuthContext;
