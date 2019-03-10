const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const url = `mongodb+srv://kayttaja:12345@cluster0-tnao4.mongodb.net/number-app?retryWrites=true`;

mongoose.connect(url, { useNewUrlParser: true });

const persSchema = new mongoose.Schema({
  name: String,
  number: String
});

persSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Person = mongoose.model("Person", persSchema);

app.use(cors());
app.use(express.static("build"));
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
  Person.find({}).then(perss => {
    res.json(perss.map(thing => thing.toJSON()));
  });
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find(pers => pers.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
  res.json(persons);
});

app.delete("/api/persons/:id", (request, response) => {
  console.log(request.params.id);
  const id = Number(request.params.id);
  persons = persons.filter(pers => pers.id !== id);

  response.status(204).end();
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

  morgan.token("type", function(req, res) {
    return response.json({ type: "juuh" });
  });

  console.log("Ei, lisätään " + body.name);
  const person = {
    id: Math.floor(Math.random() * Math.floor(1000000)),
    name: body.name,
    number: body.number
  };

  persons = persons.concat(person);

  response.status(200).json(JSON.stringify("type"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
