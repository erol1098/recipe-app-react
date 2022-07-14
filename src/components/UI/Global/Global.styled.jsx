import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
font-family: 'Poppins', sans-serif;
font-weight:bold;
color: ${({ theme }) => theme.colors.primaryText};
background-color: ${({ theme }) => theme.colors.accentColor};
/* min-width:646px; */

}

`;

export default GlobalStyles;
