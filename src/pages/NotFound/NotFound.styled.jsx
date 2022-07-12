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
    margin-bottom: 2rem;
  }
  & div {
    display: flex;
    gap: 1rem;
  }
  & button {
    color: #fff;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    border: 1px solid black;
    cursor: pointer;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
  }
  & .home {
    background-color: ${({ theme }) => theme.colors.defaultPrimary};
    border-color: ${({ theme }) => theme.colors.defaultPrimary};
    color: #fff;
  }
  & .home:hover {
    color: ${({ theme }) => theme.colors.defaultPrimary};
    background-color: #fff;
  }
  & .back {
    background-color: ${({ theme }) => theme.colors.warningColor};
    border-color: ${({ theme }) => theme.colors.warningColor};
    color: black;
  }
  & .back:hover {
    color: ${({ theme }) => theme.colors.warningColor};
    background-color: #fff;
  }
`;

export default StyledNotFound;
