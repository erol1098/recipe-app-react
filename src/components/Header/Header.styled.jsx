import styled from "styled-components";

const StyledHeader = styled.header`
  /* ... */
`;

export const StyledForm = styled.form`
  /* ... */
  padding: 2rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  gap: 0.3rem;

  & input {
    font-size: 1.2rem;
    text-indent: 1rem;
    border-radius: 0.5rem;
  }
  & input:focus {
    outline: none;
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
  & select {
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

export default StyledHeader;
