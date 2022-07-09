import styled from "styled-components";

const StyledNav = styled.nav`
  /* ... */
  position: sticky;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.darkPrimary};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: 1.3rem;
    font-family: "Shadows Into Light", cursive;
  }
  & ul {
    display: flex;
    gap: 2rem;
    list-style-type: none;
  }
  & a {
    font-size: 1.3rem;
    color: #fff;
    text-decoration: none;
  }
`;

export const Logo = styled.img`
  /* ... */
  width: 64px;
`;

export default StyledNav;
