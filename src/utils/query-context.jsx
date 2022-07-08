import { createContext, useState } from "react";
const Query = createContext();
export const QueryProvider = (props) => {
  const [mealType, setMealType] = useState("breakfast");
  const [query, setQuery] = useState("");
  const values = { mealType, setMealType, query, setQuery };

  return <Query.Provider value={values}>{props.children}</Query.Provider>;
};
export default Query;
