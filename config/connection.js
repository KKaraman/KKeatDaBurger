// Set up MySQL connection.
const mysql = require("mysql");
require('dotenv').config()
const sqlPwd = process.env.MYSQL

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: sqlPwd,
  database: "delicious_burger_db"
});

// Make connection.
connection.connect((err) => {
  if (err) {
    // notify the user that there was an error with connection
    console.error(`Error connecting to DB: ${err.stack}`);
    return;
  }
  // notify the user that the connection was successfully established
  console.log(`Connected to DB with ID ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;