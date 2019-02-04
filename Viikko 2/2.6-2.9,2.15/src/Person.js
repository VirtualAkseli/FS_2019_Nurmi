import React from "react";

const Person = ({ name, number }) => {
  return (
    <p>
      {name.newName} {number.newTele}
    </p>
  );
};

export default Person;
