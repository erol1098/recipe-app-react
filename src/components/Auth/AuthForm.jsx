import React, { useContext, useState } from "react";
import StyledAuthForm from "./Auth.styled";
import axios from "axios";
import AuthContext from "../../utils/auth-context";
import { useNavigate } from "react-router-dom";
const AuthForm = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  let url;
  isLogin
    ? (url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB_X3t5rNtIXwO8U96h1FWrBEfS0vNWkU8")
    : (url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB_X3t5rNtIXwO8U96h1FWrBEfS0vNWkU8");
  const submitHandler = (e) => {
    e.preventDefault();
    const { email, password } = inputs;
    (async () => {
      try {
        setIsLoading(true);
        const response = await axios.post(url, {
          email: email,
          password: password,
          returnSecureToken: true,
        });
        setIsLoading(false);
        // console.log(response);
        login(response.data.idToken, response.data.expiresIn);
        navigate(-1);
      } catch (error) {
        setIsLoading(false);
        alert(error.response.data.error.message || "Authentication Failed");
      }
    })();
  };

  const changeHandler = (e) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <StyledAuthForm onSubmit={submitHandler}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <div>
        <label htmlFor="email">Your Email</label>
        <br />
        <input
          type="email"
          id="email"
          required
          value={inputs.email}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label htmlFor="password">Your Password</label>
        <br />
        <input
          type="password"
          id="password"
          required
          value={inputs.password}
          onChange={changeHandler}
        />
      </div>
      <div>
        {!isLoading && (
          <button type="submit">{isLogin ? "Login" : "Create Account"}</button>
        )}
        {isLoading && <p>Sending Request</p>}
        <button type="button" onClick={switchAuthModeHandler}>
          {isLogin ? "Create new account" : "Login with existing account"}
        </button>
      </div>
    </StyledAuthForm>
  );
};

export default AuthForm;
