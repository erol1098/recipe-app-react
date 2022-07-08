import axios from "axios";
import { useCallback, useContext, useState } from "react";
import Query from "../utils/query-context";
import Recipes from "../utils/recipes";

const useHttp = () => {
  const { setMeals } = useContext(Recipes);
  const { setIsLoading } = useContext(Query);
  const [error, setError] = useState(null);

  const APP_KEY = "b1af8e05eb283a3fda86704ae725708a";
  const APP_ID = "9bdb283e";

  const makeSearch = useCallback(
    async (query, mealType) => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`
        );
        setMeals(res.data.hits);
      } catch (error) {
        setError(error.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    [setMeals, setIsLoading]
  );

  return { makeSearch, error };
};

export default useHttp;
