import { createContext, useState } from "react";

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});
export const AutHContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const userIsLoggedIn = !!token;
  const loginHandler = (token) => setToken(token);
  const logoutHandler = () => setToken(null);

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
