import React from "react";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <p>
          {part.part} {part.count}
        </p>
      ))}
    </div>
  );
};

export default Content;
