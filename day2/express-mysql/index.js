const mysql = require("mysql2");
const express = require("express");
const app = express();

const port = 3000;

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "12345678",
  database: "world",
});

app.get("/cities", function (req, res) {
  const sql = `SELECT * FROM city LIMIT 5`;
  connection.query(sql, function (err, result) {
    // we're using express now
    // inside our mysql connection (instead of logging)
    res.json(result);
  });
});

app.get("/countries", function (req, res) {
  const sql = `SELECT * FROM country LIMIT 10`;
  connection.query(sql, function (err, result) {
    res.json(result);
  });
});

app.get("/randomCountry", function (req, res) {
  const sql = `SELECT * FROM country ORDER BY RAND() LIMIT 1`;
  connection.query(sql, function (err, result) {
    res.json(result);
  });
});

// write an endpoint called kenyanLanguages that returns a JSON list with all languages that are spoken in Kenya ordered by their percentage

app.get("/kenyanLanguages", function (req, res) {
  const sql = `SELECT * FROM country WHERE name LIKE "Ken%"`;
  connection.query(sql, function (err, result) {
    res.json(result);
  });
});

app.listen(port, function () {
  console.log(`Listening on ${port}`);
});
