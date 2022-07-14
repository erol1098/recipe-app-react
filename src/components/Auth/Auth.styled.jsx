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
  border-radius: 0.3rem;
  opacity: 0.95;
  & input {
    height: 2.5rem;
    width: 20rem;
    margin: 1rem 0;
    font-size: 1.1rem;
    text-indent: 1rem;
    font-family: "Poppins", sans-serif;
  }
  & div:last-child {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
  }
  & button {
    border-radius: 0.5rem;
    border: none;
    padding: 1rem;
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
  }
  & button[type="submit"] {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.darkPrimary};
  }
  & button[type="button"] {
    border: 1px solid ${({ theme }) => theme.colors.darkPrimary};
    color: ${({ theme }) => theme.colors.darkPrimary};
    background-color: inherit;
  }
  & h2 {
    color: ${({ theme }) => theme.colors.darkPrimary};
    margin-bottom: 1rem;
    text-decoration: underline;
  }
  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    width: 90%;
    margin-top: 1rem;
    max-width: 25rem;
  }
`;

export default StyledAuthForm;
