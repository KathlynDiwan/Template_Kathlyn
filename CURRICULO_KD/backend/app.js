// Importing all required libraries.
const express = require('express');
// Instancing app with express.
const app = express();
// Defining the server hostname and port.
const hostname = '127.0.0.1';
const port = 3026;

const sqlite3 = require("sqlite3").verbose();
const DBPATH = "curriculobd.db";
// Setting up the express static middleware.
app.use(express.static("../frontend/"));

//returns comunication info
app.use(express.json());
app.get("/idiomas", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  let db = new sqlite3.Database(DBPATH);
  let sql = "SELECT * FROM Idiomas";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    // response
    res.json(rows);
  });
  db.close();
});

/* Inicia o servidor */
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});