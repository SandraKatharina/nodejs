const db = require("./services/db");

const express = require("express");
const app = express();

const port = 3000;

app.get("/get10Cities", function (req, res) {
  db.get10Cities(function (result) {
    res.json(result);
  });
});

app.get("/getCities", function (req, res) {
  let limit = req.query.limit;
  if (limit <= 0 || !limit) {
    limit = 20;
  }

  let offset = req.query.offset;
  if (offset <= 0 || !offset) {
    offset = 0;
  }
  db.getCitiesWithLimit(limit, offset, function (result) {
    res.json(result);
  });
});

app.listen(port, function () {
  console.log(`Listening on ${port}`);
});
