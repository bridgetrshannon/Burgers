var mysql = require("mysql");
// Global for connection
var connection;
// If on Heroku use the Envirnmental Variable for JawsDB

// connected but getting error that the burgers table doesn't exist

if (process.env.JAWSDB_URL){
  console.log(process.env.JAWSDB_URL);
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "burgers_db"
  });
};
 //look for the error
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
module.exports = connection;