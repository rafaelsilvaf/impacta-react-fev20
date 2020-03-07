const http = require('http');
// requisitando http nativo do node
const json = {
    "content-Type": "text/html"
}
// chave e valor - pode ser uma string 
// const requisicao = function(request, response){ substituir o request pelo _ para ignorar o parametro
    const requisicao = function(_, response){
    response.writeHead(200, json);
    response.write("<h1>Bem vindo ao nosso http server</h1>");
    response.end();
}
// monta uma resposta padrão para o servidor ser chamado

const server = http.createServer(requisicao);
// criar um servidor
const callback = function(){
    console.log('Servidor no ar')
    
}
// chmar o servidor

server.listen(3000,function(){
    console.log ("servidor no ar")
    });
// mandamos o servidor subir na porta 3000 e um callback para saber se está funcionando ou não