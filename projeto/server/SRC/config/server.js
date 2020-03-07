// arquivo responsavel por configurar o servidor node/express
const port = 3200;
// cria uma variavel e atribui o valor da porta
const bodyParser = require('body-parser');
const express = require('express');

const server = express(); // novo servidor - instancia o express
//para toda requisição que chegar, use o bodyparser para 
//interpretar chegadas no formato urlencoded sempre que a url receber algum texto expecial ele vai conseguir configurar com %
server.use (bodyParser.urlencoded({ extended: true }))
//considera o formato json no corpo da requisição
server.use (bodyParser.json()); 
server.get('/', function(req,res) {
    res.send('hello world!');
});
    //template string (observe a crase)   
    server.listen(port, function () { 
    console.log(`servidor no ar, na porta ${port}`); 
});

module.exports = server;
