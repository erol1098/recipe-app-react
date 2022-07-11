import styled from "styled-components";

const StyledAuthForm = styled.form`
  /* ... */
  margin: 5rem auto;
  padding: 2rem;
  width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.lightPrimary};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  & input {
    height: 2.5rem;
    width: 20rem;
    margin: 1rem 0;
    font-size: 1.1rem;
    text-indent: 1rem;
    font-family: "Permanent Marker", cursive;
  }
  & div:last-child {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }
  & button {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.darkPrimary};
    border-radius: 0.5rem;
    border: none;
    padding: 1rem;
    font-size: 1rem;
    font-family: "Permanent Marker", cursive;
    cursor: pointer;
  }
  & h2 {
    margin-bottom: 1rem;
    text-decoration: underline;
  }
`;

export default StyledAuthForm;
