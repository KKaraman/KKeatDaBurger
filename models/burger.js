// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const tableName = 'burgers';

// create a burger object that will call orm functions from orm.js
const burger = {
  selectAll: (cb) => {
    orm.selectAll(tableName, (res) => {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: (cols, vals, cb) => {
    orm.insertOne(tableName, cols, vals, (res) => {
      cb(res);
    });
  },
  updateOne: (objColVals, condition, cb) => {
    orm.updateOne(tableName, objColVals, condition, (res) => {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;
