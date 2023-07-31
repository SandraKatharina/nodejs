const express = require("express");
const app = express();

const port = 3000;
let counter = 0;
let visited = 0;

app.get("/here", function (req, res) {
  visited++;
  return res.send(`Hello, here was someone ${visited} times`);
});

app.get("/", function (req, res) {
  counter++;
  return res.send(`Hello, World! This site was visited ${counter} times`);
});

app.listen(port, function () {
  console.log(`hello world app listening on port ${port}`);
});
