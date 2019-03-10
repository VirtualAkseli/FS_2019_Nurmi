const initialState = {
  good: 0,
  ok: 0,
  bad: 0
};

const counterReducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case "GOOD":
      const chanState1 = {
        ...state,
        good: state.good + 1
      };
      console.log("Tila on: " + state.good);
      return chanState1;

    case "NEUTRAL":
      const chanState2 = {
        ...state,
        ok: state.ok + 1
      };
      console.log("Tila on: " + state.neutral);
      return chanState2;

    case "BAD":
      const chanState3 = {
        ...state,
        bad: state.bad + 1
      };
      console.log("Tila on: " + state.bad);
      return chanState3;

    case "ZERO":
      const chanState4 = {
        ...state,
        good: 0,
        ok: 0,
        bad: 0
      };
      return chanState4;

    default:
      return state;
  }
};

export default counterReducer;
