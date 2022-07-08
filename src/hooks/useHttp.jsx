import axios from "axios";
import { useContext, useEffect } from "react";
import Recipes from "../utils/recipes";

const useHttp = () => {
  const { meals, setMeals } = useContext(Recipes);
  const APP_KEY = "b1af8e05eb283a3fda86704ae725708a";
  const APP_ID = "9bdb283e";
  useEffect(() => {
    try {
      (async () => {
        const res = await axios.get(
          `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=breakfast`
        );
        setMeals(res.data.hits);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [setMeals]);
  return { meals };
};

export default useHttp;
