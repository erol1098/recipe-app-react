import styled from "styled-components";

const StyledSection = styled.section`
  /* ... */
  background-color: ${({ theme }) => theme.colors.dividerColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  padding: 2rem 1rem;
  border-radius: 0.3rem;
  width: 15rem;
  & h2 {
    text-align: center;
    font-size: 1.2rem;
    height: 30%;
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px inset,
      rgba(0, 0, 0, 0.24) 0px 1px 2px inset;
  }
  & img {
    width: 100%;
    border-radius: 0.3rem;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
  & .image-wrapper {
    height: 208px;
    width: 208px;
  }
  & .button-wrapper {
    height: 10%;
  }
  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    width: 20rem;
    height: 27rem;
    & > h2 {
      height: auto;
      padding: 0 0.5rem;
    }
  }
`;
export const Image1 = styled.img`
  /* ... */
  width: 100%;
  height: 100%;
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
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  border: 1px solid ${({ theme }) => theme.colors.darkPrimary};
  &:hover {
    background-color: #fff;
    color: ${({ theme }) => theme.colors.darkPrimary};
    border: 1px solid ${({ theme }) => theme.colors.darkPrimary};
  }
  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    width: 208px;
  }
`;

export default StyledSection;
