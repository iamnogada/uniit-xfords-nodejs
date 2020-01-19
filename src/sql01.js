var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "passw0rd",
  database: "classicmodels"
});

con.connect(function(err) {
  if (err) {
    console.log(err);
    
      throw err;
  }
  //Select all customers and return the result object:
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) {
        console.log(err);
        
        throw err;
    }
    console.log(JSON.stringify(result));
  });
});
