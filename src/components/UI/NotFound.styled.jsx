import styled from "styled-components";

const StyledNotFound = styled.main`
  /* ... */
  height: calc(100vh - 10rem);
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h2 {
    font-size: 8rem;
  }
  & h3 {
    font-size: 5rem;
  }
  & button {
    color: #fff;
    background-color: green;
    border-radius: 0.5rem;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    cursor: pointer;
  }
  & div :nth-child(2) {
    background-color: yellow;
    color: black;
    margin-left: 2rem;
  }
`;

export default StyledNotFound;
