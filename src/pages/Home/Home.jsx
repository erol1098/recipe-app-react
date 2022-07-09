import React, { useContext } from "react";
import Card from "../../components/UI/Card/Card";
import Recipes from "../../utils/recipes";
import StyledMain from "./Container.styled";
import Query from "../../utils/query-context";
import Spinner from "../../components/UI/Spinner/Spinner";
import Form from "../../components/Header/Form";
const Home = () => {
  const { meals } = useContext(Recipes);
  const { isLoading } = useContext(Query);
  if (!meals) {
    return (
      <div>
        <Form />
        <p style={{ textAlign: "center", fontSize: "2rem", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          repudiandae quisquam magnam omnis porro culpa, ipsam tempore nisi esse
          aliquid ducimus, quo nihil voluptatum atque amet impedit laboriosam
          officiis, deserunt totam. Unde quibusdam tenetur exercitationem
          inventore quidem dolorum eligendi hic atque maiores. Culpa
          perspiciatis nostrum ducimus optio ad, delectus eaque.
        </p>
      </div>
    );
  }
  if (meals?.length === 0 && meals) {
    return (
      <div>
        <Form />
        <p style={{ textAlign: "center", fontSize: "2rem", marginTop: "2rem" }}>
          No Item Found!
        </p>
      </div>
    );
  }
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Form />
      <StyledMain>
        {meals?.map((meal) => {
          const { label, image, calories } = meal.recipe;
          return <Card key={calories} label={label} image={image} />;
        })}
      </StyledMain>
    </>
  );
};

export default Home;
