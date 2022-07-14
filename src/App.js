import React from "react";
import ContextProvider from "./components/UI/ContextProvider";
import Layout from "./components/UI/Layout/Layout";
import AppRouter from "./router/AppRouter";
const App = () => {
  return (
    <ContextProvider>
      <Layout>
        <AppRouter />
      </Layout>
    </ContextProvider>
  );
};

export default App;
