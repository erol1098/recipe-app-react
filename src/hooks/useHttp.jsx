import axios from "axios";
import { useCallback, useContext, useEffect } from "react";
import Recipes from "../utils/recipes";

const useHttp = () => {
  const { setMeals } = useContext(Recipes);
  const APP_KEY = "b1af8e05eb283a3fda86704ae725708a";
  const APP_ID = "9bdb283e";

  const makeSearch = useCallback(
    async (query, mealType) => {
      const res = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`
      );
      setMeals(res.data.hits);
    },
    [setMeals]
  );

  useEffect(() => {
    try {
      makeSearch();
    } catch (error) {
      console.log(error);
    }
  }, [makeSearch]);

  return { makeSearch };
};

export default useHttp;
