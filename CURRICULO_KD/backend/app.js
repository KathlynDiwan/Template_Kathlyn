// Importing all required libraries.
const express = require('express');
// Instancing app with express.
const app = express();
// Defining the server hostname and port.
const hostname = '127.0.0.1';
const port = 3026;

const sqlite3 = require("sqlite3").verbose(); //conectando com o banco de dados 
const DBPATH = "curriculobd.db"; //conexão com banco de dados 

//pegando os dados do servidor: endpoints
app.use(express.static("../frontend/"));
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

//criando o servidor 
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});