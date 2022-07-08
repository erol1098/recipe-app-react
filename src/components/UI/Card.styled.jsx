import styled from "styled-components";

const StyledSection = styled.section`
  /* ... */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  padding: 1rem;
  width: 15rem;
  & h2 {
    text-align: center;
    font-size: 1rem;
  }
`;

export const Image = styled.img`
  /* ... */
  width: 100%;
`;

export const Button = styled.button`
  padding: 1rem;
  color: green;
`;

export default StyledSection;
