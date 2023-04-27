const express = require("express");
const app = express();

const port = 3000;
let counter = 0;

app.get("/", function (req, res) {
  counter++;
  res.send("you are home");
});

app.get("/away", function (req, res) {
  res.send("you are away");
});

app.listen(port, function () {
  console.log(`listening on ${port}`);
});
