import React from "react";
// import styles from "./App.module.css";
import useHttp from "./hooks/useHttp";
const App = () => {
  const { data } = useHttp();
  console.log(data.hits);
  return;
};

export default App;
