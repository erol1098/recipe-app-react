import React from "react";
import StyledSection, { Button, Image } from "./Card.styled";

const Card = (props) => {
  console.log(props);
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
