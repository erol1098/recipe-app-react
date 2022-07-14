import React, { useContext } from "react";
import Recipes from "../../utils/recipes-context";
import Form from "../../components/Header/Form";
import { Outlet } from "react-router-dom";
import StyledMain, { Image, Content } from "./Container.styled";
import background from "../../assets/background.jpg";
const Home = () => {
  const { meals } = useContext(Recipes);
  return (
    <>
      <Form />
      <StyledMain>
        {!meals && (
          <div>
            <Content>
              Enter a what you have eaten, like "coffee and croissant" or
              "chicken enchilada" to see how it works. We have accurate data
              tens of thousands of foods, including international dishes.
            </Content>
            <Image src={background} alt="dish-table" />
          </div>
        )}
        {meals && <Outlet />}
      </StyledMain>
    </>
  );
};
export default Home;
