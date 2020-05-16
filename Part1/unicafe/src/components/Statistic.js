import React from "react";

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>
        {text} {value}
      </td>
    </tr>
  );
};

export default Statistic;
