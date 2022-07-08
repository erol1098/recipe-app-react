import React, { useContext } from "react";
import Card from "../components/UI/Card";
import Recipes from "../utils/recipes";
import StyledMain from "../components/UI/Container.styled";

const Home = () => {
  const { meals } = useContext(Recipes);
  return (
    <StyledMain>
      {meals?.map((meal) => {
        const { label, image, calories } = meal.recipe;
        return <Card key={calories} label={label} image={image} />;
      })}
    </StyledMain>
  );
};

export default Home;
