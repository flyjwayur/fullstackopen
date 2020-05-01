import React from "react";

const total = ({ parts }) => {
  const part0 = parts[0];
  const part1 = parts[1];
  const part2 = parts[2];

  return (
    <p>
      Number of exercises:
      {part0.exercises + part1.exercises + part2.exercises}
    </p>
  );
};

export default total;
