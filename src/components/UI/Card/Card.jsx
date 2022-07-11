// import React, { useContext } from "react";
// import Query from "../../utils/query-context";
// import Spinner from "./Spinner/Spinner";

import StyledSection, { Button, Image1 } from "./Card.styled";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../utils/auth-context";
import Spinner from "../Spinner/Spinner";

const Card = (props) => {
  // const { isLoading } = useContext(Query);
  // if (isLoading) {
  //   return (
  //     <StyledSection>
  //       <Spinner />
  //     </StyledSection>
  //   );
  // }
  const [isLoading, setIsLoading] = useState(false);

  function asyncImageLoader(url) {
    return new Promise((resolve, reject) => {
      setIsLoading(true);
      var image = new Image();
      image.src = url;
      image.onload = () => {
        setIsLoading(false);
        resolve(image);
      };
      image.onerror = () => {
        reject(new Error("could not load image"));
      };
    });
  }
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  const { label, image } = props;

  useEffect(() => {
    asyncImageLoader(image);
  }, [image]);

  return (
    <StyledSection>
      <h2>{label}</h2>
      <div className="image-wrapper">
        {!isLoading && <Image1 src={image} />}
        {isLoading && <Spinner />}
      </div>
      <div className="button-wrapper">
        <Button
          onClick={() =>
            !isLoggedIn ? navigate("/login") : navigate(`/details/${label}`)
          }
        >
          More
        </Button>
      </div>
    </StyledSection>
  );
};

export default Card;
