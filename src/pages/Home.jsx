import React from "react";
import useHttp from "../hooks/useHttp";

const Home = () => {
  const { meals } = useHttp();
  console.log(meals);
  return <div>Home</div>;
};

export default Home;
