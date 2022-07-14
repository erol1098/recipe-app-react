import styled from "styled-components";

const StyledMain = styled.main`
  /* ... */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.accentColor};
`;
export const Image = styled.img`
  width: 80%;
  display: block;
  margin: auto;
  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    display: none;
  }
`;
export const Content = styled.p`
  text-align: center;
  font-size: 2rem;
  margin: 2rem auto;
  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    font-size: 1.2rem;
  }
`;
export default StyledMain;
