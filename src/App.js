import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import { QueryProvider } from "./utils/query-context";
import { RecipesProvider } from "./utils/recipes";
import GlobalStyles from "./components/UI/Global/Global.styled";
import theme from "./components/UI/Global/Theme";
import Login from "./pages/Login/Login";
import { AuthContextProvider } from "./utils/auth-context";
import Search from "./pages/Home/Search";
import Layout from "./components/UI/Layout/Layout";
import GoodBye from "./components/UI/GoodBye";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <QueryProvider>
        <RecipesProvider>
          <AuthContextProvider>
            <Layout>
              <BrowserRouter>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />}>
                    <Route path="search" element={<Search />} />
                  </Route>
                  <Route path="login" element={<Login />} />
                  <Route path="details/:name" element={<Details />} />
                  <Route path="about" element={<About />} />
                  <Route path="goodbye" element={<GoodBye />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </Layout>
          </AuthContextProvider>
        </RecipesProvider>
      </QueryProvider>
    </ThemeProvider>
  );
};

export default App;
