const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "12345678",
  database: "world",
});

function getFiveCitiesBad(httpResponseObject) {
  const sql = `SELECT * FROM city LIMIT 5`;
  connection.query(sql, function (err, result) {
    console.log(result);
    httpResponseObject.json(result);
  });
}

function getFiveCities(callback) {
  const sql = `SELECT * FROM city LIMIT 5`;
  connection.query(sql, function (err, result) {
    callback(result);
  });
}

module.exports = {
  getFiveCities,
  getFiveCitiesBad,
};
