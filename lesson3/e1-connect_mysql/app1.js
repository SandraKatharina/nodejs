const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "12345678",
  database: "world",
});

const sql = `SELECT name, population
             FROM city
             ORDER by population
             LIMIT 10`;

connection.query(sql, function (err, result) {
  console.log(result);
  result.forEach(function (element) {
    console.log(element.population);
  });
});
