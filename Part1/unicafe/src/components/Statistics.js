import React from "react";
import Heading from "./Heading";

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = good - bad / all;
  const positive = (good / all) * 100;
  return (
    <div>
      <Heading name="statistics" />
      {all !== 0 ? (
        <div>
          <div>good {good}</div>
          <div>neutral {neutral}</div>
          <div>bad {bad}</div>
          <div>all {all}</div>
          <div>average {average}</div>
          <div>positive Feedback {positive + "%"}</div>
        </div>
      ) : (
        "No feedback given"
      )}
    </div>
  );
};

export default Statistics;
