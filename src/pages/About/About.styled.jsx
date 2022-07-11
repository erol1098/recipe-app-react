import styled from "styled-components";

const StyledAboutMe = styled.section`
  /* ... */
  background-color: ${({ theme }) => theme.colors.accentColor};
  width: 50%;
  margin: auto;
  margin-top: 3rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  & img {
    border-radius: 15rem;
    width: 15rem;
  }
  & div:last-child {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  & a {
    color: #000;
  }
`;

export default StyledAboutMe;
