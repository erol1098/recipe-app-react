import styled from "styled-components";

const StyledMain = styled.main`
  /* ... */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.accentColor};
`;

export default StyledMain;
