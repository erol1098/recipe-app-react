import { createContext, useState } from "react";

const Recipes = createContext();

export const RecipesProvider = (props) => {
  const [meals, setMeals] = useState();

  const values = { meals, setMeals };

  return <Recipes.Provider value={values}>{props.children}</Recipes.Provider>;
};

export default Recipes;