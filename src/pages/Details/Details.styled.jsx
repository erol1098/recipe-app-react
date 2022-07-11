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
  background-color: ${({ theme }) => theme.colors.lightPrimary};
  border-radius: 0.3rem;
  & article {
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    border-top: 1px solid ${({ theme }) => theme.colors.secondaryText};
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryText};
    background-color: ${({ theme }) => theme.colors.dividerColor};
  }
  & div {
    text-align: center;
    padding: 1rem 0;
  }
  & div p {
    font-size: 2rem;
  }
  & ul {
    padding: 0 0 0 3rem;
    list-style-type: none;
    line-height: 2rem;
  }
  & img {
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
    font-family: "Permanent Marker", cursive;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.warningColor};
    color: ${({ theme }) => theme.colors.primaryText};
  }
`;

export default StyledDetail;
