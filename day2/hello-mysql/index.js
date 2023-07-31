const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "12345678",
  database: "world",
});

connection.query("SELECT * FROM city LIMIT 5", function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log(result);
});
