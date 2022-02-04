var mysql = require('mysql');

var con = mysql.createConnection({
  host: "biobhvs13q9kgmwfcqdx-mysql.services.clever-cloud.com",
  user: "ulc64x9doscuffn5",
  password: "6adpAKz4mnzc6oXHkLcc", 
  database : 'biobhvs13q9kgmwfcqdx'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports =con;