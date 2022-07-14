import { createContext, useState } from "react";

const RecipesContext = createContext();

export const RecipesProvider = (props) => {
  const [meals, setMeals] = useState(
    JSON.parse(localStorage.getItem("savedList"))
  );

  const values = { meals, setMeals };

  return (
    <RecipesContext.Provider value={values}>
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesContext;
