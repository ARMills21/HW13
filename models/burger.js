var orm = require("../config/orm.js");

// Create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  insertOne: function(burger, cb) {
    orm.insertOne("burgers", burger, function(res) {
      cb(res);
    });
  },

  updateOne: function(burgerId, cb) {
    orm.updateOne("burgers", "devoured", burgerId, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;