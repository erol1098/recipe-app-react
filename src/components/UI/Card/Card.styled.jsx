import styled from "styled-components";

const StyledSection = styled.section`
  /* ... */
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  padding: 1rem;
  border-radius: 0.3rem;
  width: 15rem;
  & h2 {
    text-align: center;
    font-size: 1.2rem;
    height: 20%;
  }
  &:hover {
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }
  & img {
    width: 100%;
    border-radius: 0.3rem;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
  & .image-wrapper {
    /* width: 15rem; */
    height: 208px;
  }
  & .button-wrapper {
    height: 10%;
  }
`;

export const Image1 = styled.img`
  /* ... */
  width: 100%;
  border-radius: 0.3rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

export const Button = styled.button`
  color: #fff;
  background-color: ${({ theme }) => theme.colors.darkPrimary};
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  font-family: "Permanent Marker", cursive;
`;

export default StyledSection;
