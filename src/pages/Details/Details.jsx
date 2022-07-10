import React, { useContext } from "react";
import StyledDetail from "./Details.styled";
import { Navigate, useParams } from "react-router-dom";
import Recipes from "../../utils/recipes";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const { meals } = useContext(Recipes);
  const { name } = useParams();
  if (!meals) return <Navigate to="notfound" />;
  const meal = meals.find((meal) => meal.recipe.label === name)?.recipe;
  return (
    <StyledDetail>
      <div>
        <p>{meal.label}</p>
        <p>
          {meal.cuisineType[0].replace(
            meal.cuisineType[0][0],
            meal.cuisineType[0][0].toUpperCase()
          )}
          Cuisine
        </p>
      </div>
      <article>
        <img src={meal.image} alt="" />
        <ul>
          {meal.ingredientLines.map((line, i) => (
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
