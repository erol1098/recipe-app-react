import styled from "styled-components";

const StyledDetail = styled.section`
  /* ... */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  max-width: 50rem;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

  border-radius: 0.3rem;
  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    width: 90%;
  }
  & ul {
    list-style-type: none;
    line-height: 2rem;
  }
  & li:first-child {
    color: ${({ theme }) => theme.colors.darkPrimary};
    text-decoration: underline;
  }
  & img {
    width: 20rem;
    border-radius: 0.3rem;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
  & button {
    align-self: stretch;
    border-radius: 0 0 0.3rem 0.3rem;
    border: none;
    padding: 1rem;
    font-size: 1rem;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.warningColor};
    color: ${({ theme }) => theme.colors.primaryText};
  }
`;
export const Nutrients = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: start;
  column-gap: 1rem;
  padding: 0.5rem 0;

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: flex-start;
    padding: 0 0.5rem;
  }
`;
export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.lightPrimary};
  text-align: center;
  padding: 1rem 0;
  width: 100%;
  & p {
    font-size: 2rem;
    @media (max-width: ${({ theme }) => theme.screen.sm}) {
      font-size: 1.4rem;
      padding: 0 0.7rem;
    }
  }
`;
export const Content = styled.article`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  gap: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.secondaryText};
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryText};
  background-color: ${({ theme }) => theme.colors.dividerColor};
  & li:first-child {
    color: ${({ theme }) => theme.colors.darkPrimary};
    text-decoration: underline;
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;
export default StyledDetail;
