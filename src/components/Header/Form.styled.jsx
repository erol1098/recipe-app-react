import styled from "styled-components";

const StyledForm = styled.form`
  /* ... */
  padding: 2rem;
  display: flex;
  justify-content: center;
  gap: 0.3rem;
  background-color: ${({ theme }) => theme.colors.accentColor};

  & input {
    font-size: 1.2rem;
    text-indent: 1rem;
    border-radius: 0.5rem;
    height: 3rem;

    /* height: 7rem; */
  }
  & input:focus {
    outline: none;
  }
  & button {
    height: 3rem;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.defaultPrimary};
    border-radius: 0.5rem;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    border: 1px solid ${({ theme }) => theme.colors.defaultPrimary};
  }
  & button:hover {
    background-color: #fff;
    color: ${({ theme }) => theme.colors.defaultPrimary};
    border: 1px solid ${({ theme }) => theme.colors.defaultPrimary};
  }
  & select {
    height: 3rem;
    text-align: center;
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
  }
  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    flex-direction: column;
  }
`;

export default StyledForm;
