import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
// import { ThemeProvider } from "styled-components";
import About from "./pages/About";
import Details from "./pages/Details";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { QueryProvider } from "./utils/query-context";
import { RecipesProvider } from "./utils/recipes";

// import styles from "./App.module.css";

const App = () => {
  return (
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
  );
};

export default App;
