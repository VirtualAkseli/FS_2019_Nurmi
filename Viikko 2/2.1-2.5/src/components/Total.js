import React from "react";

const Total = ({ parts }) => {
  //parts.forEach(part => (total += part.exercises));

  const total = parts.reduce((a, part) => a + part.exercises, 0);

  return (
    <>
      <div>
        Tehtäviä yhteensä:
        {total}
      </div>
    </>
  );
};

export default Total;
