import React, { useContext } from "react";
import Card from "../components/UI/Card";
import Recipes from "../utils/recipes";
import StyledMain from "../components/UI/Container.styled";
import Query from "../utils/query-context";
import Spinner from "../components/UI/Spinner/Spinner";
const Home = () => {
  const { meals } = useContext(Recipes);
  const { isLoading } = useContext(Query);
  // if (meals.length === 0 || !meals) {
  //   return (
  //     <StyledMain>
  //       <p>No Item Found!</p>
  //     </StyledMain>
  //   );
  // }
  if (isLoading) {
    return <Spinner />;
  }
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
