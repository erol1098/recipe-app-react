import React from "react";
import { Form } from "../components/Navbar/Navbar.styled";
import useHttp from "../hooks/useHttp";

const Home = () => {
  const { meals } = useHttp();
  console.log(meals);
  return (
    <Form>
      <input type="text" name="entry" id="entry" />
      <button type="submit">Search</button>
      <select>
        <option></option>
        <option></option>
        <option></option>
      </select>
    </Form>
  );
};

export default Home;
