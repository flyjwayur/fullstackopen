import React from "react";
import Heading from "./Heading";

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = all !== 0 ? good - bad / all : 0;
  const positive = all !== 0 ? (good / all) * 100 : 0;
  return (
    <div>
      <Heading name="statistics" />
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {all}</div>
      <div>average {average}</div>
      <div>positive Feedback {positive + "%"}</div>
    </div>
  );
};

export default Statistics;
