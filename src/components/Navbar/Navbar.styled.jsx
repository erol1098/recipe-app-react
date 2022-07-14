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
  & a {
    color: #fff;
    text-decoration: none;
  }
  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;
export const Logo = styled.img`
  /* ... */
  width: 64px;
  border-radius: 5rem;
`;
export const Button = styled.button`
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
  &:hover {
    background-color: #fff;
    color: ${({ theme }) => theme.colors.defaultPrimary};
    border: 1px solid ${({ theme }) => theme.colors.defaultPrimary};
  }
`;
export const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  list-style-type: none;
  justify-content: center;
  align-items: center;

  & a {
    font-size: 1.3rem;
    color: #fff;
    text-decoration: none;
  }
  & a:hover {
    color: ${({ theme }) => theme.colors.defaultPrimary};
  }
  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 1rem;
    & li {
      text-align: center;
      width: 100%;
    }
    & button {
      width: 100%;
    }
  }
`;
export const Hamburger = styled.div`
  display: none;
  color: #fff;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    display: block;
  }
`;
export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.7rem;
  & span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    width: 100%;
    font-size: 1.4rem;
  }
`;
export default StyledNav;
