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

  const { CHOCDF, CHOLE, ENERC_KCAL, FAT, PROCNT, SUGAR, WATER } =
    meal.totalNutrients;

  return (
    <StyledDetail>
      <div>
        <p>{meal.label}</p>
        <p>
          {meal.cuisineType[0].replace(
            meal.cuisineType[0][0],
            meal.cuisineType[0][0].toUpperCase()
          )}{" "}
          Cuisine
        </p>
      </div>
      <article>
        <section>
          <img src={meal.image} alt="dish" />
          <ul>
            <li
              style={{
                textDecoration: "underline",
                textAlign: "center",
                fontSize: "1.3rem",
                marginBottom: "1rem",
              }}
            >
              Nutrients
            </li>
            <li>
              <span>{CHOCDF.label}</span>
              {": "}
              <span>
                {Math.round(+CHOCDF.quantity)}
                {CHOCDF.unit}
              </span>
            </li>
            <li>
              <span>{FAT.label}</span>
              {": "}
              <span>
                {Math.round(+FAT.quantity)}
                {FAT.unit}
              </span>
            </li>
            <li>
              <span>{CHOLE.label}</span>
              {": "}
              <span>
                {Math.round(+CHOLE.quantity)}
                {CHOLE.unit}
              </span>
            </li>
            <li>
              <span>{PROCNT.label}</span>
              {": "}
              <span>
                {Math.round(+PROCNT.quantity)}
                {PROCNT.unit}
              </span>
            </li>
            <li>
              <span>{SUGAR.label}</span>
              {": "}
              <span>
                {Math.round(+SUGAR.quantity)}
                {SUGAR.unit}
              </span>
            </li>
            <li>
              <span>{WATER.label}</span>
              {": "}
              <span>
                {Math.round(+WATER.quantity)}
                {WATER.unit}
              </span>
            </li>
            <li>
              <span>{ENERC_KCAL.label}</span>
              {": "}
              <span>
                {Math.round(+ENERC_KCAL.quantity)}
                {ENERC_KCAL.unit}
              </span>
            </li>
          </ul>
        </section>
        <ul>
          <li
            style={{
              textDecoration: "underline",
              textAlign: "center",
              fontSize: "1.3rem",
              marginBottom: "1rem",
            }}
          >
            Ingredients
          </li>
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
