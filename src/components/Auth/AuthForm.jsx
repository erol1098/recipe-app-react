import React, { useState } from "react";
import StyledAuthForm from "./Auth.styled";
import axios from "axios";
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [inputs, setInputs] = useState({ email: "", password: "" });

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { email, password } = inputs;
    console.log(email, password);
    if (isLogin) {
    } else {
      (async () => {
        try {
          const response = await axios.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB_X3t5rNtIXwO8U96h1FWrBEfS0vNWkU8`,
            {
              email: email,
              password: password,
              returnSecureToken: true,
            }
          );
          console.log(response);
        } catch (error) {
          console.log(error.response.data.error.message);
        }
      })();
    }
  };

  const changeHandler = (e) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      {/* <h1>{isLogin ? "Login" : "Sign Up"}</h1> */}
      <StyledAuthForm onSubmit={submitHandler}>
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
          <button type="submit">{isLogin ? "Login" : "Create Account"}</button>
          <button type="button" onClick={switchAuthModeHandler}>
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </StyledAuthForm>
    </>
  );
};

export default AuthForm;
