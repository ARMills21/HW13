// Set up MySQL connection.
var mysql = require("mysql");
require("dotenv").config();

var connection;
if (process.env.JAWSDB_URL) {
  // Database is JawsDB on Heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // Database is local
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "Xander123",
    database: "burgers_db",
  });
}

connection.connect();

// Export connection for our ORM to use.
module.exports = connection;