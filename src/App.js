import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Details from "./pages/Details";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { QueryProvider } from "./utils/query-context";
import { RecipesProvider } from "./utils/recipes";
import GlobalStyles from "./components/UI/Global/Global.styled";
import theme from "./components/UI/Global/Theme";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <QueryProvider>
        <RecipesProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="login" element={<Home/>} /> */}
              <Route path="details" element={<Details />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </RecipesProvider>
      </QueryProvider>
    </ThemeProvider>
  );
};

export default App;
