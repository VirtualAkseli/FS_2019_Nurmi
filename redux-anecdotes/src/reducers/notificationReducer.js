const notificationAtStart = [
  {
    content: "This note is visible at the beginning",
    votes: 0,
    id: 11111
  },
  {
    content: "This note might show up after the first one, very nice",
    votes: 1,
    id: 22222
  }
];

const blanq = [
  {
    content: "",
    votes: 0,
    id: 333
  }
];

const notificationReducer = (state = notificationAtStart, action) => {
  console.log("ACTION: ", action);
  switch (action.type) {
    case "VOTE":
      console.log(action.data);

      return action.data;

    default:
      return state;

    case "NEW_ANEC":
      return action.data;
  }
};

export const blank = action => {
  return {
    type: "SHOW_ANEC"
  };
};

export default notificationReducer;
