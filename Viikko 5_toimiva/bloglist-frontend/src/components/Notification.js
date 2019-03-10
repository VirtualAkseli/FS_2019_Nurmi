import React from "react";

const Notification = ({ message }) => {
  const style11 = {
    color: "blue",
    background: "lightgrey",
    border: "solid",

    borderWidth: 4,

    padding: 5,
    marginBottom: 2
  };

  if (message === null) {
    return null;
  }

  return (
    <div style={style11} className="error">
      {message}
    </div>
  );
};

export default Notification;
