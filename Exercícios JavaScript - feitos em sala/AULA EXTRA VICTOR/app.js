const express = require('express'); 
const bodyParser = require('body-parser');//bodyparser: divide os dados 
const { append } = require('express/lib/response');
const urlencodedParser = bodyParser.urlencoded({extended : false}); 
const sqlite3 = require('sqlite3').verbose //variável banco de dados
const DBPATH = 'dbUser.db'

const hostname = '127.0.0.1';
const port = 3071; 

append.get('/', (re1,res)=>{
    res.send("Achou miserável!");
})

teobaldo.listen(port, hostname, () =>{
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
    //console.log(`Servidor rodando em http://'+hostnem+":"+port+"/"
})
