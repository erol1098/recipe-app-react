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
  letter-spacing: 0.1rem;
  font-weight: light;
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: 1.7rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
      rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    padding: 0.3rem 1rem;
    border-radius: 0.3rem;
    color: #fff;
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

  & a:hover {
    color: ${({ theme }) => theme.colors.defaultPrimary};
  }
  & button {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.defaultPrimary};
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.defaultPrimary};
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.1rem;
    cursor: pointer;
    font-weight: bold;
  }
  & button:hover {
    background-color: #fff;
    color: ${({ theme }) => theme.colors.defaultPrimary};
    border: 1px solid ${({ theme }) => theme.colors.defaultPrimary};
  }
`;

export const Logo = styled.img`
  /* ... */
  width: 64px;
  border-radius: 5rem;
`;

export default StyledNav;
