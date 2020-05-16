import React from "react";
import Heading from "./Heading";
import Statistic from "./Statistic";

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = good - bad / all;
  const positive = (good / all) * 100;
  return (
    <div>
      <Heading name="statistics" />
      {all !== 0 ? (
        <table>
          <tbody>
            <Statistic text="Good" value={good} />
            <Statistic text="Neutral" value={neutral} />
            <Statistic text="Bad" value={bad} />
            <Statistic text="All" value={all} />
            <Statistic text="Average" value={average} />
            <Statistic text="Positive Feedback" value={positive + "%"} />
          </tbody>
        </table>
      ) : (
        "No feedback given"
      )}
    </div>
  );
};

export default Statistics;
