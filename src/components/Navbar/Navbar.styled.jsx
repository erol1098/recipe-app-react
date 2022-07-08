import styled from "styled-components";

const StyledNav = styled.nav`
  /* ... */
  position: sticky;
  top: 0;
  left: 0;
  background-color: grey;
  padding: 1rem 2rem;
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  width: 100px;
`;

export const Form = styled.form`
  /* ... */
  display: flex;
`;

export default StyledNav;
