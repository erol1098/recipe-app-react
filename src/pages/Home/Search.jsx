import React, { useContext } from "react";
import StyledMain from "./Container.styled";
import Spinner from "../../components/UI/Spinner/Spinner";
import Recipes from "../../utils/recipes-context";
import Query from "../../utils/query-context";
import Card from "../../components/UI/Card/Card";

const Search = () => {
  const { meals } = useContext(Recipes);
  const { isLoading } = useContext(Query);
  if (meals?.length === 0) {
    return (
      <p
        style={{
          textAlign: "center",
          fontSize: "2rem",
        }}
      >
        No Item Found!
      </p>
    );
  }
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <StyledMain>
      {meals?.map(({ recipe: { label, image, calories } }) => (
        <Card key={calories} label={label} image={image} />
      ))}
    </StyledMain>
  );
};

export default Search;
