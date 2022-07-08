import { createContext, useState } from "react";
const Query = createContext();
export const QueryProvider = (props) => {
  const [mealType, setMealType] = useState("breakfast");
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(0);
  const values = {
    mealType,
    setMealType,
    query,
    setQuery,
    isLoading,
    setIsLoading,
  };

  return <Query.Provider value={values}>{props.children}</Query.Provider>;
};
export default Query;
