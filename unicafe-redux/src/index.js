import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducer from "./reducer";
import { Transform } from "stream";

const store = createStore(reducer);

const groovy = {
  color: "green",
  background: "orange",
  margin: 20,
  paddingTop: 5
};

const sugar = {
  color: "pink",
  background: "crimson",
  style: "italic"
};

const App = () => {
  return (
    <div style={groovy}>
      <button style={sugar} onClick={e => store.dispatch({ type: "GOOD" })}>
        good
      </button>
      <button style={sugar} onClick={e => store.dispatch({ type: "NEUTRAL" })}>
        {" "}
        neutral
      </button>
      <button style={sugar} onClick={e => store.dispatch({ type: "BAD" })}>
        {" "}
        bad
      </button>
      <button style={sugar} onClick={e => store.dispatch({ type: "ZERO" })}>
        {" "}
        reset statistics
      </button>
      <div>hyvä {store.getState().good}</div>
      <div>neutral {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>

      <img
        src="https://i.kym-cdn.com/photos/images/original/001/058/457/fb2.jpg"
        alt="smetana cat furious"
      />
    </div>
  );
};

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

renderApp();
store.subscribe(renderApp);
