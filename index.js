var express = require("express");
const { DEC8_BIN } = require("mysql/lib/protocol/constants/charsets");
const con = require("./util/database");
var db = require('./util/database')
var app = express();


app.use(express.static("public"));

//seting routes

app.get("/competition", (req, res) => {
  //load events
  let random = parseInt(Math.random() * 6);
  res.send(random);
});

app.get("/result", (req, res) => {
  res.redirect('result.html');
});

app.get("/stats", (req, res) => {
  let stats = db.query(`SELECT * FROM play`, function(err, result, field){
    if(err) throw err;
    res.json(result);
  });
});

app.post("/checkwin", (req, res) => {
  let randy = Math.floor(Math.random() * 6)+1;
  console.log(randy);
  let win = "Congrats";
  let loose="Sorry"

  db.query(`
  UPDATE play
  SET id =id+1;
  `)
  if (randy != 3){
    db.query(`
    UPDATE play
    SET loss = loss+1, outcome ='Sorry you lost' ;
    `)
  } 
  else {
    db.query(`
    UPDATE play
    SET wins =wins+1, outcome ='Congrats you won';
    `)
  }

  res.redirect('result.html');
});

app.listen(3000, () => {
  console.log("Test");
});


// db.query(`
// CREATE TABLE play (
//   id int,
//   wins int,
//   loss int,
//   outcome varchar(255)
// );
// `)

// db.query(`
// Drop TABLE play
// `)
