// import React, { useContext } from "react";
// import Query from "../../utils/query-context";
// import Spinner from "./Spinner/Spinner";

import StyledSection, { Button, Image } from "./Card.styled";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../../utils/auth-context";

const Card = (props) => {
  // const { isLoading } = useContext(Query);
  // if (isLoading) {
  //   return (
  //     <StyledSection>
  //       <Spinner />
  //     </StyledSection>
  //   );
  // }
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  const { label, image } = props;
  return (
    <StyledSection>
      <h2>{label}</h2>
      <Image src={image} />
      <Button
        onClick={() =>
          !isLoggedIn ? navigate("/login") : navigate(`/details/${label}`)
        }
      >
        More
      </Button>
    </StyledSection>
  );
};

export default Card;
