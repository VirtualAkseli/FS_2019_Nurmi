import React from "react";
import Header from "./Header.js";
import Part from "./Part.js";
import Total from "./Total.js";

const Course = ({ parts, course }) => {
  console.log("parts", parts);
  var total = 0;
  const rows = () => (
    <div>
      {parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
      <br />
      <Total parts={parts} />
    </div>
  );

  return (
    <div>
      <h2>
        <Header course={course} />
      </h2>
      <ul>{rows()}</ul>
    </div>
  );
};
export default Course;
