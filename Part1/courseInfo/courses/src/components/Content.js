import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <div>
      {parts
        ? parts.map(({ name, count }, index) => (
            <Part key={"_" + index} name={name} count={count} />
          ))
        : null}
    </div>
  );
};

export default Content;
