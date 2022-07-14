import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import AuthContext from "../utils/auth-context";
import Query from "../utils/query-context";
import Recipes from "../utils/recipes-context";

const useHttp = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { meals, setMeals } = useContext(Recipes);
  const { setIsLoading } = useContext(Query);
  const [error, setError] = useState(null);

  const APP_KEY = process.env.REACT_APP_APP_KEY;
  const APP_ID = process.env.REACT_APP_APP_ID;

  useEffect(() => {
    isLoggedIn && localStorage.setItem("savedList", JSON.stringify(meals));
  }, [meals, isLoggedIn]);

  const makeSearch = useCallback(
    async (query, mealType) => {
      setIsLoading(1);
      setError(null);
      try {
        const { data } = await axios.get(
          `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`
        );
        setMeals(data.hits);
      } catch (error) {
        setError(error.message || "Something went wrong!");
      }
      setIsLoading(0);
    },
    [setMeals, setIsLoading, APP_ID, APP_KEY]
  );

  return { makeSearch, error };
};

export default useHttp;
