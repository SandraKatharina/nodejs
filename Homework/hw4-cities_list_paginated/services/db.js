const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "12345678",
  database: "world",
});

function getCitiesWithLimitAndOffset(limit, offset, callback) {
  connection.query(
    `SELECT * FROM city LIMIT ${limit} OFFSET ${offset}`,
    function (err, result) {
      callback(result);
    }
  );
}

module.exports = {
  getCitiesWithLimitAndOffset,
};
