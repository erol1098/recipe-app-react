import axios from "axios";
import { useEffect, useState } from "react";
const useHttp = () => {
  const [meal, setMeal] = useState("");
  const APP_KEY = "b1af8e05eb283a3fda86704ae725708a";
  const APP_ID = "9bdb283e";
  useEffect(() => {
    try {
      (async () => {
        const data = await axios.get(
          `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=breakfast`
        );
        setMeal(data);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return meal;
};

export default useHttp;
