import styled from "styled-components";

const StyledNotFound = styled.main`
  /* ... */
  height: calc(100vh - 10rem);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  & h2 {
    font-size: 5rem;
  }
  & h3 {
    font-size: 3rem;
  }
  & div {
    margin-top: 2rem;
  }
  & button {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.defaultPrimary};
    border-radius: 0.5rem;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-family: "Permanent Marker", cursive;
    cursor: pointer;
  }
  & div :nth-child(2) {
    background-color: ${({ theme }) => theme.colors.warningColor};
    color: black;
    margin-left: 2rem;
  }
`;

export default StyledNotFound;
