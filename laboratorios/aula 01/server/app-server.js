const http = require('http');

const requisicao = function(request, response){
    response.writeHead(200, json);
    response.write("<h1>Bem vindo ao nosso http server</h1>");
    response.end();
}

const server = http.createServer(requisicao);

const callback = function(){
    console.log('Servidor no ar')
    
}

server.listen(3000, callback);