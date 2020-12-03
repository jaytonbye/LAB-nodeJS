const path = require("path");
const fs = require("fs");

let testString = "this is a test";
let chirpsArray = {
  chirp1: "blah1",
  chirp2: "blah2",
  chirp3: "blah3",
  chirp4: "blah4",
  chirp5: "blah5",
};

let dataPath = path.join(__dirname, "../chirps.json");

fs.writeFile(dataPath, JSON.stringify(chirpsArray), (err) => {
  if (err) console.log(err);
});

fs.readFile(dataPath, (err, data) => {
  if (err) return console.log(err);
  console.log(data.toString());
});
