const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

export const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = anecdote => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  };
};

/* export const vote = id => {
  store.dispatch({
    type: "VOTE",
    data: { id }
  });
}; */

const initialState = anecdotesAtStart.map(asObject);

export const getAnecdote = id => {
  console.log("haetaan id: ", { id });

  return {
    type: "GET_ANEC",
    data: { id }
  };
};

export const createAnecdote = content => {
  console.log("Täällä ollaan");

  return {
    type: "NEW_ANEC",
    data: {
      content,
      votes: 0,
      id: getId()
    }
  };
};

export const voteId = (id, content, votes) => {
  console.log(id, content, votes);
  return {
    type: "VOTE",
    data: { id, content, votes }
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "VOTE":
      const jotain = state.map(ele => {
        if (ele.id === action.data.id) {
          console.log("iom");
          return {
            ...ele,
            votes: ele.votes + 1
          };
        }
        console.log(state);
        return ele;
      });

      return jotain;

    case "NEW_ANEC":
      const anecdoten = {
        content: action.data.content,
        id: getId(),
        votes: 0,
        head: " was created"
      };
      console.log(state);
      state.push(anecdoten);
      console.log(state);
      return state;
    default:
      return state;

    case "GET_ANEC":
      const toBeGet = state.map(ele => {
        if (ele.id === action.data.id) {
          return ele.content;
        }
      });

      return toBeGet;
  }
};

export default reducer;
