import getAnecdote from "../reducers/anecdoteReducer";
import React from "react";
import Anecdotes from "../components/Anecdotes";
import { blank } from "../reducers/notificationReducer";
const Notification = ({ store }) => {
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1
  };

  setTimeout(() => {
    document.getElementById("s1").hidden = false;
  }, 1);

  setTimeout(() => {
    document.getElementById("s1").hidden = true;
  }, 5000);

  return (
    <div id="s1" style={style}>
      {store.getState().notifications.content}
      {store.getState().notifications.head}
    </div>
  );
};

export default Notification;
