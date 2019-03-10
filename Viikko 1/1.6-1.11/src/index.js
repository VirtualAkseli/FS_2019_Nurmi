import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistic = ({ name, value, unit }) => (
  <p>
    {name} {value} {unit}
  </p>
);

const Graph = props => {
  return (
    <div>
      <h1>
        <strong>Anna mielipiteesi Unicafen palvelusta </strong>
      </h1>
    </div>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>Ei yhtään annettua palautetta</p>;
  }
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <Statistic name="Hyvää" />
          </td>
          <td>
            <Statistic value={good} />
          </td>
        </tr>
        <tr>
          <td>
            <Statistic name="Neutraali" />
          </td>
          <td>
            <Statistic value={neutral} />
          </td>
        </tr>
        <tr>
          <td>
            <Statistic name="Pahaa" />
          </td>
          <td>
            <Statistic value={bad} />
          </td>
        </tr>
        <tr>
          <td>
            <Statistic name="Yhteensä" />
          </td>
          <td>
            <Statistic value={good + bad + neutral} />
          </td>
        </tr>
        <tr>
          <td>
            <Statistic name="Keskiarvo" />
          </td>
          <td>
            <Statistic value={(good - bad) / (good + neutral + bad)} />
          </td>
        </tr>
        <tr>
          <td>
            <Statistic name="Positiivisia" />
          </td>
          <td>
            <Statistic
              value={(good / (good + neutral + bad)) * 100}
              unit={"%"}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const App = props => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allReviews, setAll] = useState([]);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  return (
    <>
      <Graph />

      <Button handleClick={handleGoodClick} text="Hyvää" />

      <Button handleClick={handleNeutralClick} text="Neutraali" />

      <Button handleClick={handleBadClick} text="Pahaa" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
