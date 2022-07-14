import React from "react";
import { QueryProvider } from "../../utils/query-context";
import { RecipesProvider } from "../../utils/recipes-context";
import { AuthContextProvider } from "../../utils/auth-context";
const ContextProvider = (props) => {
  return (
    <AuthContextProvider>
      <QueryProvider>
        <RecipesProvider>{props.children}</RecipesProvider>
      </QueryProvider>
    </AuthContextProvider>
  );
};
export default ContextProvider;
