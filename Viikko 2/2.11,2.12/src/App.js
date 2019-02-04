import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [tryCountry, setTryCountry] = useState("");
  const [showAll, setShowAll] = useState(true);

  console.log("jelou");

  const hook = () => {
    console.log("effect");
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      console.log("promise fulfilled");
      setCountries(response.data);
    });
  };

  useEffect(hook, []);

  console.log("render", countries.length, "countries");

  const countriesToShow = showAll
    ? countries.filter(
        pers => pers.name.toUpperCase().indexOf(tryCountry.toUpperCase()) > -1
      )
    : countries.filter(
        coun => coun.name.toUpperCase().indexOf(tryCountry.toUpperCase()) > -1
      );

  const rows = () =>
    countriesToShow.map(coun => (
      <p key={coun.id}>
        {coun.name} {coun.number}
      </p>
    ));

  const rows2 = () =>
    countriesToShow.map(coun => (
      <div key={coun.id}>
        <br />
        <h1>{coun.name}</h1>
        <br />
        <p>capital: {coun.capital}</p>
        <p>population: {coun.population}</p>

        <h2>languages: </h2>
        {coun.languages.map(lang => (
          <ul>{lang.name}</ul>
        ))}
        <img
          src={coun.flag}
          alt="flag of ${coun.name}"
          height="110"
          width="180"
        />
      </div>
    ));

  const handleNameChange2 = event => {
    console.log(countriesToShow.length);
    setShowAll(countriesToShow.length > 10);
    console.log(event.target.value);
    setTryCountry(event.target.value);
  };

  return (
    <div>
      <form>
        rajaa näytettäviä:{" "}
        <input value={tryCountry} onChange={handleNameChange2} />
      </form>
      <ul>
        {countriesToShow.length <= 10 && countriesToShow.length > 1 && rows()}
        {countriesToShow.length > 10 && countriesToShow.length > 1 && (
          <p>LIIKA ON LIIKAA</p>
        )}
        {countriesToShow.length === 1 && rows2()}
      </ul>
    </div>
  );
};

export default App;
