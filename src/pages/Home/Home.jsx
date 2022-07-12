import React, { useContext } from "react";
import Recipes from "../../utils/recipes";
import Form from "../../components/Header/Form";
import { Outlet } from "react-router-dom";
import StyledMain from "./Container.styled";
import background from "../../assets/background.jpg";
const Home = () => {
  const { meals } = useContext(Recipes);
  return (
    <>
      <Form />
      <StyledMain>
        {!meals && (
          <div>
            <p
              style={{
                textAlign: "center",
                fontSize: "2rem",
                marginTop: "2rem",
                alignSelf: "stretch",
                width: "75%",
                margin: "auto",
              }}
            >
              Enter a what you have eaten, like "coffee and croissant" or
              "chicken enchilada" to see how it works. We have accurate data
              tens of thousands of foods, including international dishes.
            </p>
            <img src={background} alt="dish-table" />
          </div>
        )}
        {meals && <Outlet />}
      </StyledMain>
    </>
  );
};
export default Home;
