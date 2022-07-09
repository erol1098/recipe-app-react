import styled from "styled-components";

const StyledAuthForm = styled.form`
  /* ... */
  margin: 2rem auto;
  width: 33rem;
  height: 33rem;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  background-color: ${({ theme }) => theme.colors.accentColor};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  border-radius: 20rem;
  & input {
    height: 2.5rem;
    width: 20rem;
    margin: 1rem 0;
    font-size: 1.3rem;
    text-indent: 1rem;
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
    cursor: pointer;
  }
`;

export default StyledAuthForm;
