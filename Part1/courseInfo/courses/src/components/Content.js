import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <div>
      {parts
        ? parts.map(({ name, exercises }, index) => (
            <Part key={"_" + index} name={name} exercises={exercises} />
          ))
        : null}
    </div>
  );
};

export default Content;
