import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = props => {
  const [selected, setSelected] = useState(0);

  const setToSelected = newSelected => {
    setSelected(newSelected);
  };

  return (
    <div>
      <h1>Sun Tzu said: </h1>
      {props.anecdotes[selected]}
      <p> Has {props.votes[selected]} votes</p>
      <Button2 handleClick={() => setToSelected(addVotes(selected))} />
      <Button
        handleClick={() => setToSelected(getRandomInt(anecdotes.length))}
      />
      <BestAn votes={props.votes} anecdotes={props.anecdotes} />
    </div>
  );
};

function fixVotes(input) {
  var votes = [...input];
  var big = 0;
  var index = 0;
  for (var i = 0; i < votes.length; i++) {
    if (big < votes[i]) {
      big = votes[i];
      index = i;
    }
  }

  return index;
}

function getRandomInt(max) {
  const value = Math.floor(Math.random() * Math.floor(max));

  return value;
}

function addVotes(chosen) {
  votes[chosen] += 1;

  return chosen;
}

const Button = props => (
  <button onClick={props.handleClick}>Arvo satunnainen FS-anekdootti! </button>
);

const Button2 = props => <button onClick={props.handleClick}> Äänestä </button>;

const BestAn = props => (
  <>
    <h1>Most liked anecdote:</h1>
    <p>{anecdotes[fixVotes(props.votes)]} </p>
    <p>Votes: {votes[fixVotes(props.votes)]} </p>
  </>
);
const votes = [0, 0, 0, 0, 0, 0];
const top = votes.length - 1;
const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];
const Table = props => <p> {props.number} Votes </p>;

ReactDOM.render(
  <App anecdotes={anecdotes} votes={votes} top={top} />,
  document.getElementById("root")
);
