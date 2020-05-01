import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const parts = [
    { name: part1, count: exercises1 },
    { name: part2, count: exercises2 },
    { name: part3, count: exercises3 },
  ];

  return (
    <div>
      <Header course={course}></Header>
      <Content parts={parts}></Content>
      <Total totalExercise={exercises1 + exercises2 + exercises3}></Total>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
