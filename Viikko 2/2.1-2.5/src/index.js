import React from "react";
import ReactDOM from "react-dom";
import Course from "./components/Course.js";

const App = () => {
  const courses = [
    {
      name: "Half Stack -sovelluskehitys",
      id: 1,
      parts: [
        {
          name: "Reactin perusteet",
          exercises: 10,
          id: 1
        },
        {
          name: "Tiedonvälitys propseilla",
          exercises: 7,
          id: 2
        },
        {
          name: "Komponenttien tila",
          exercises: 14,
          id: 3
        },
        {
          name: "Redux 7",
          exercises: 99,
          id: 4
        }
      ]
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 2,
          id: 1
        },
        {
          name: "Middlewaret",
          exercises: 7,
          id: 2
        }
      ]
    },
    {
      name: "Pseudokoodin todellinen luonne, osa 3",
      id: 3,
      parts: [
        {
          name: "Hämäys",
          exercises: 2,
          id: 1
        },
        {
          name: "Huijaaminen",
          exercises: 7,
          id: 2
        },
        {
          name: "Kiristäminen",
          exercises: 17,
          id: 3
        },
        {
          name: "Uhkailu",
          exercises: 13,
          id: 4
        }
      ]
    }
  ];

  const rows = () => (
    <div>
      {courses.map(course => (
        <Course key={course.id} course={course.name} parts={course.parts} />
      ))}
    </div>
  );
  return (
    <ul>
      <h1> O P E T U S O H J E L M A </h1>
      {rows()}
    </ul>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
