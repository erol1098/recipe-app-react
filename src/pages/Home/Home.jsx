import React, { useContext } from "react";

import Recipes from "../../utils/recipes";

import Form from "../../components/Header/Form";
import { Outlet } from "react-router-dom";
import StyledMain from "./Container.styled";
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
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio repudiandae quisquam magnam omnis porro culpa, ipsam
              tempore nisi esse aliquid ducimus, quo nihil voluptatum atque amet
              impedit laboriosam officiis, deserunt totam. Unde quibusdam
              tenetur exercitationem inventore quidem dolorum eligendi hic atque
              maiores. Culpa perspiciatis nostrum ducimus optio ad, delectus
              eaque.
            </p>
          </div>
        )}
        {meals && <Outlet />}
      </StyledMain>
    </>
  );
};
export default Home;
