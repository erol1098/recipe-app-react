import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { ThemeProvider } from "styled-components";
import About from "./pages/About";
import Details from "./pages/Details";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// import styles from "./App.module.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="login" element={<Home/>} /> */}
        <Route path="details" element={<Details />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
