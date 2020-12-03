const path = require("path");
const fs = require("fs");
const request = require("request-promise");

const optionsStart = {
  uri: url,
  method: "GET",
  encoding: null,
};

let dataPath = path.join(__dirname, "./reddit.json");
let dataPath2 = path.join(__dirname, "./popular-articles.json");

let redditArray = [];

request("https://reddit.com/r/popular.json", (err, res, body) => {
  if (err) {
    console.log(err);
  }
  JSON.parse(body).data.children.forEach((item) => {
    redditArray.push(item.data.title, item.data.url, item.data.author_fullname);
  });
}).then((message) => {
  console.log(redditArray);
  /*fs.writeFile(dataPath2, JSON.stringify(redditArray), (err) => {
    if (err) {
      console.log(err);*/
    }
  });
});
