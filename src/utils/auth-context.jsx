import { createContext, useState } from "react";
const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const userIsLoggedIn = !!token;
  const loginHandler = (token, expires) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("willExpire", expires);
    setTimeout(logoutHandler, expires * 1000);
  };
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("willExpire");
    localStorage.removeItem("savedList");
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
