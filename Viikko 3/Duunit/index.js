const express = require("express");
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const Info = require("./models/Info");

app.use(cors());
app.use(express.static("build"));
morgan.token("type", function(req, res) {
  return res.json(res.body);
});
app.use(morgan("tiny"));
app.use(bodyParser.json());

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "045-1236543"
  },
  {
    id: 2,
    name: "Arto Järvinen",
    number: "041-21423123"
  },
  {
    id: 3,
    name: "Lea Kutvonen",
    number: "040-4323234"
  },
  {
    id: 4,
    name: "Martti Tienari",
    number: "09-784232"
  }
];

app.get("/", function(req, res) {
  res.send("hello, world!");
});

app.get("/api", (req, res) => {
  res.send("<h1>Täällä ei ole vielä mitään</h1>");
});

app.get("/info", (req, res) => {
  let sz = persons.length;

  let now = new Date();

  res.send("Puhelinluettelossa on " + sz + " nimeä </br>" + now);
});

app.get("/api/persons", (req, res) => {
  Info.find({}).then(infos => {
    res.json(infos.map(inf => inf.toJSON()));
  });
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find(pers => pers.id === id);
  Info.findById(req.params.id)
    .then(pers => {
      if (pers) {
        res.json(pers.toJSON());
      } else {
        response.status(404).end();
      }
    })
    .catch(error => {
      console.log(error);
      response.status(400).send({ error: "malformatted id" });
    });
});

app.delete("/api/persons/:id", (request, response, next) => {
  console.log(request.params.id);
  Info.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end();
    })
    .catch(error => next(error));
});

app.post("/api/persons", (request, response) => {
  const body = request.body;
  console.log("Onko " + body.name + " jo luettelossa?");
  if (body.name === undefined || body.number === undefined) {
    return response.status(400).json({
      error: "content missing"
    });
  }

  function isPresent(person) {
    return person.name === body.name;
  }

  if (persons.find(isPresent)) {
    console.log("On");
    return response.status(409).json(
      JSON.stringify({
        error: "name must be unique"
      })
    );
  }

  console.log("Ei, lisätään " + body.name);
  const person = new Info({
    id: Math.floor(Math.random() * Math.floor(1000000)),
    name: body.name,
    number: body.number
  });

  person.save().then(savedPers => {
    response.json(savedPers.toJSON());
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
