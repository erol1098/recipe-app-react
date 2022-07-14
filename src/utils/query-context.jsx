import { createContext, useState } from "react";
const QueryContext = createContext();
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

  return (
    <QueryContext.Provider value={values}>
      {props.children}
    </QueryContext.Provider>
  );
};
export default QueryContext;
