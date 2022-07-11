import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
/* font-family: "Shadows Into Light", cursive; */
font-family: 'Permanent Marker', cursive;
font-weight:bold;
letter-spacing:0.1rem;
  color: ${({ theme }) => theme.colors.primaryText};
  background-color: ${({ theme }) => theme.colors.accentColor};

}

`;

export default GlobalStyles;
