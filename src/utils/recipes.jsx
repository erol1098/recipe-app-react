import { createContext, useState } from "react";
import useHttp from "../hooks/useHttp";

const Recipes = createContext();

export const RecipesProvider = (props) => {
  const [meals, setMeals] = useState();

  const values = { meals, setMeals };
};

export default Recipes;
