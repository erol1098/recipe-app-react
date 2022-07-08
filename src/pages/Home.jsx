import React, { useContext } from "react";
import Recipes from "../utils/recipes";

const Home = () => {
  const { meals } = useContext(Recipes);
  console.log(meals);
  return <div></div>;
};

export default Home;
