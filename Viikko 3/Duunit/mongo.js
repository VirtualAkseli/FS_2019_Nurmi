const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const who = process.argv[3];

const what = process.argv[4];

const url = `mongodb+srv://kayttaja:${password}@cluster0-tnao4.mongodb.net/number-app?retryWrites=true`;

mongoose.connect(url, { useNewUrlParser: true });

const persSchema = new mongoose.Schema({
  name: String,
  number: String
});

const Person = mongoose.model("Person", persSchema);

if (process.argv.length == 3) {
  console.log("puhelinluettelo:");
  Person.find({}).then(result => {
    result.forEach(pers => {
      console.log(pers.name + " " + pers.number);
    });
    mongoose.connection.close();
  });
  return;
}

const pers = new Person({
  name: who,
  number: what
});

pers.save().then(response => {
  console.log(`lisättiin ${pers.name} numero ${pers.number} luetteloon`);
  mongoose.connection.close();
});
