import React, { useContext } from "react";
import StyledDetail, { Nutrients, Header, Content } from "./Details.styled";
import { Navigate, useParams } from "react-router-dom";
import Recipes from "../../utils/recipes-context";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const { meals } = useContext(Recipes);
  const { name } = useParams();
  if (!meals) return <Navigate to="notfound" />;
  const meal = meals.find((meal) => meal.recipe.label === name)?.recipe;

  const { CHOCDF, CHOLE, ENERC_KCAL, FAT, PROCNT, SUGAR, WATER } =
    meal.totalNutrients;
  const nutrientList = [CHOCDF, CHOLE, ENERC_KCAL, FAT, PROCNT, SUGAR, WATER];
  return (
    <StyledDetail>
      <Header>
        <p>{meal.label}</p>
      </Header>
      <Content>
        <figure>
          <img src={meal.image} alt="dish" />
          <figcaption style={{ textAlign: "center", marginTop: "0.2rem" }}>
            {meal.cuisineType[0].replace(
              meal.cuisineType[0][0],
              meal.cuisineType[0][0].toUpperCase()
            )}
            {"  Cuisine"}
          </figcaption>
        </figure>
        <ul>
          <li>Ingredients</li>
          {meal.ingredientLines.map((line, i) => (
            <li key={i}>
              {i + 1} - {line}
            </li>
          ))}
        </ul>
      </Content>
      <Nutrients>
        <li>{"Nutrients : "}</li>
        {nutrientList.map((nutrient) => {
          const { label, quantity, unit } = nutrient;
          return (
            <li key={label}>
              <span>{label}</span> {" : "}
              <span>
                {Math.round(+quantity)}
                {unit}
              </span>
            </li>
          );
        })}
      </Nutrients>
      <button onClick={() => navigate(-1)}>Back</button>
    </StyledDetail>
  );
};

export default Details;
