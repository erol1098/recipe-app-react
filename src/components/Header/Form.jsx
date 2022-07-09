import React, { useContext } from "react";
import Query from "../../utils/query-context";
import useHttp from "../../hooks/useHttp";
import StyledForm from "./Form.styled";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const { mealType, setMealType, query, setQuery } = useContext(Query);
  const { makeSearch } = useHttp();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    makeSearch(query, mealType);
    setQuery("");
    navigate("/search");
  };
  return (
    <StyledForm onSubmit={submitHandler}>
      <input
        type="text"
        name="query"
        id="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
      />
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
      <button type="submit">Search</button>
    </StyledForm>
  );
};

export default Form;
