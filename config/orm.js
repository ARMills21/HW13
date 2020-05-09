// Import(require) connection.js into orm.js
// Import MySQL connection.
var connection = require("../config/connection.js");

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers.These are the methods you will need to use in order to retrieve and store data in your database.

// selectAll()
// insertOne()
// updateOne()

// Export the ORM object in module.exports.

// Object for all our SQL statement functions.
var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },

  insertOne: function(table, objColVals, cb) {
    var queryString = "INSERT INTO ?? SET ?";
    connection.query(queryString, [table, objColVals], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },

  updateOne: function(tableInput, column, burgerId, cb) {
    var queryString = "UPDATE ?? SET ?? = 1 WHERE id = ?";
    connection.query(queryString, [tableInput, column, burgerId], function(
      err,
      res
    ) {
      console.log("update" + queryString);
      if (err) throw err;
      console.log(res);
      cb(res);
    });
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;