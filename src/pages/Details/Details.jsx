import React, { useContext } from "react";
import StyledDetail from "./Details.styled";
import { useParams, Navigate } from "react-router-dom";
import Recipes from "../../utils/recipes";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../utils/auth-context";
const Details = () => {
  const navigate = useNavigate();
  const { meals } = useContext(Recipes);
  const { name } = useParams();

  const meal = meals?.find((meal) => meal.recipe.label === name).recipe;
  console.log(meal);

  const { isLoggedIn } = useContext(AuthContext);
  if (!meal && !isLoggedIn) return <Navigate to="/login" />;
  if (!meal && isLoggedIn) return <Navigate to="/" />;
  return (
    <StyledDetail>
      <div>
        <p>{meal?.label}</p>
        <p>
          {meal?.cuisineType[0].replace(
            meal?.cuisineType[0][0],
            meal?.cuisineType[0][0].toUpperCase()
          )}{" "}
          Cuisine
        </p>
      </div>
      <article>
        <img src={meal?.image} alt="" />
        <ul>
          {meal?.ingredientLines.map((line, i) => (
            <li key={i}>
              {i + 1} - {line}
            </li>
          ))}
        </ul>
      </article>
      <button onClick={() => navigate(-1)}>Back</button>
    </StyledDetail>
  );
};

export default Details;
