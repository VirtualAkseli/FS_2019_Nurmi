import React from "react";

const Part = ({ part }) => {
  console.log(part);
  console.log("?");
  return (
    <li>
      {part.name}, {part.exercises}
    </li>
  );
};
export default Part;
