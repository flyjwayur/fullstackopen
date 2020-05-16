import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const App = (props) => {
  const [selected, setSelected] = useState(0);

  const [votes, setVotes] = useState(
    new Array(anecdotes.length + 1).join("0").split("").map(parseFloat)
  );

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const handleNextAnecdote = (anecdotesLength) => () => {
    setSelected(getRandomInt(anecdotesLength));
  };

  const handleVoteAnecdote = () => {
    const newVotes = [...votes];
    setVotes(newVotes, newVotes[selected]++);
  };

  return (
    <div>
      <div>{props.anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <button onClick={handleVoteAnecdote}>vote</button>
      <button onClick={handleNextAnecdote(anecdotes.length)}>
        Next anecdote
      </button>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>,
  document.getElementById("root")
);
