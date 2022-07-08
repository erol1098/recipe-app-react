// import React, { useContext } from "react";
// import Query from "../../utils/query-context";
// import Spinner from "./Spinner/Spinner";

import StyledSection, { Button, Image } from "./Card.styled";
const Card = (props) => {
  // const { isLoading } = useContext(Query);
  // if (isLoading) {
  //   return (
  //     <StyledSection>
  //       <Spinner />
  //     </StyledSection>
  //   );
  // }

  const { label, image } = props;
  return (
    <StyledSection>
      <h2>{label}</h2>
      <Image src={image} />

      <Button>More</Button>
    </StyledSection>
  );
};

export default Card;
