import React, { useContext } from "react";
import Query from "../../utils/query-context";
import useHttp from "../../hooks/useHttp";
import { StyledForm } from "./Header.styled";

const Form = () => {
  const { mealType, setMealType, query, setQuery } = useContext(Query);
  const { makeSearch } = useHttp();

  console.log(mealType);
  console.log(query);
  const submitHandler = (e) => {
    e.preventDefault();
    makeSearch(query, mealType);
  };
  return (
    <StyledForm onSubmit={submitHandler}>
      <input
        type="text"
        name="query"
        id="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
      <select
        name="mealType"
        id="mealType-select"
        onChange={(e) => setMealType(e.target.value)}
      >
        <option value="breakfast">Breakfast</option>
        <option value="dinner">Dinner</option>
        <option value="lunch">Lunch</option>
        <option value="snack">Snack</option>
        <option value="teatime">Teatime</option>
      </select>
    </StyledForm>
  );
};

export default Form;
