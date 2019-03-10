import { createAnecdote } from "../reducers/anecdoteReducer";
import React from "react";

const AnecdoteForm = props => {
  const addAnecdote = event => {
    event.preventDefault();
    props.store.dispatch(createAnecdote(event.target.anec.value));
    event.target.anec.value = "";
  };

  return (
    <form onSubmit={addAnecdote}>
      <input name="anec" />
      <button type="submit">lisää</button>
    </form>
  );
};
export default AnecdoteForm;
