import React from "react";
import { voteId } from "../reducers/anecdoteReducer";

const veryStylish = {
  fontWeight: "bold",
  color: "green",
  background: "yellow"
};

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <li style={veryStylish}>
      {anecdote.content}

      <p>
        {"  votes: "}
        {anecdote.votes}
      </p>

      <button onClick={handleClick}>vote</button>
    </li>
  );
};

const Anecdotes = ({ store }) => {
  return (
    <ul>
      {store
        .getState()
        .anecdotes.sort(function(a, b) {
          return b.votes - a.votes;
        })
        .map(anec => (
          <Anecdote
            key={anec.id}
            anecdote={anec}
            handleClick={() =>
              store.dispatch(voteId(anec.id, anec.content, anec.votes))
            }
          />
        ))}
    </ul>
  );
};
export default Anecdotes;
