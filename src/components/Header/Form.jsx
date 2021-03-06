import React, { useContext } from "react";
import Query from "../../utils/query-context";
import useHttp from "../../hooks/useHttp";
import StyledForm from "./Form.styled";
import { useNavigate } from "react-router-dom";
import Modal from "../UI/Modal/Modal";

const Form = () => {
  const { mealType, setMealType, query, setQuery } = useContext(Query);
  const { makeSearch, error } = useHttp();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    makeSearch(query, mealType);
    setQuery("");
    navigate("/search");
  };
  return (
    <>
      {error && (
        <Modal
          title={"Something went wrong!"}
          message={error}
          onConfirm={(e) => {
            navigate("*");
          }}
        />
      )}
      <StyledForm onSubmit={submitHandler}>
        <input
          type="text"
          name="query"
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a keyword..."
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
    </>
  );
};

export default Form;
