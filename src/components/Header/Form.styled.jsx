import styled from "styled-components";

const StyledForm = styled.form`
  /* ... */
  padding: 2rem;
  height: 7rem;
  display: flex;
  justify-content: center;
  gap: 0.3rem;
  background-color: ${({ theme }) => theme.colors.accentColor};

  & input {
    font-size: 1.2rem;
    text-indent: 1rem;
    border-radius: 0.5rem;
    font-family: "Permanent Marker", cursive;
  }
  & input:focus {
    outline: none;
  }
  & button {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.defaultPrimary};
    border-radius: 0.5rem;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    font-family: "Permanent Marker", cursive;
  }
  & select {
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    cursor: pointer;
    font-family: "Permanent Marker", cursive;
  }
`;

export default StyledForm;
