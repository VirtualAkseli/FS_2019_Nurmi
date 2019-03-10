import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [tryName, setTryName] = useState("");
  const [newTele, setNewTele] = useState("");
  const [showAll, setShowAll] = useState(true);

  const hook = () => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then(response => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  };

  useEffect(hook, []);

  console.log("render", persons.length, "persons");

  const namesToShow = showAll
    ? persons.filter(
        pers => pers.name.toUpperCase().indexOf(tryName.toUpperCase()) > -1
      )
    : persons.filter(
        pers => pers.name.toUpperCase().indexOf(tryName.toUpperCase()) > -1
      );

  const rows = () =>
    namesToShow.map(pers => (
      <div key={pers.id}>
        <p>
          {pers.name} {pers.number}{" "}
        </p>{" "}
        <button onClick={() => exterminatus(pers.id)}> poista </button>
      </div>
    ));

  const exterminatus = id =>
    axios.delete(`http://localhost:3001/persons/${id}`).then(response => {
      console.log("Mission accomplished!");
    });

  const addName = event => {
    event.preventDefault();
    for (var i = 0; i < persons.length; i++) {
      if (persons[i].content === newName) {
        alert(`${newName} on jo listassa!`);
        return;
      }
      if (persons[i].number === newTele) {
        alert(`${newTele} on jo listassa!`);
        return;
      }
    }

    const nameObject = {
      name: newName,
      number: newTele
      //date: new Date().toISOString(),
      //important: Math.random() > 0.5,
    };

    axios.post("http://localhost:3001/persons", nameObject).then(response => {
      setPersons(persons.concat(response.data));
      setNewName("");
    });
  };

  const handleNameChange = event => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNameChange2 = event => {
    setShowAll(!showAll);
    console.log(event.target.value);
    setTryName(event.target.value);
    //persons.filter(
    //  pers => pers.content.toUpperCase().indexOf(tryName.toUpperCase()) > -1
    //);
  };

  const handleTeleChange = event => {
    console.log(event.target.value);
    setNewTele(event.target.value);
  };

  return (
    <div>
      <form>
        rajaa näytettäviä:{" "}
        <input value={tryName} onChange={handleNameChange2} />
      </form>

      <h2>Puhelinluettelo</h2>
      <div>debug: {newName}</div>
      <form onSubmit={addName}>
        nimi: <input value={newName} onChange={handleNameChange} />
        numero: <input value={newTele} onChange={handleTeleChange} />
        <button type="submit">lisää</button>
      </form>

      <h2>Numerot</h2>
      <ul>{rows()}</ul>
    </div>
  );
};

export default App;
