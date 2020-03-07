const express = require('express');
module.exports = function (server) {
 //definir a URL base para todas as rotas
 const router = express.Router();
 server.use('/api', router); 
 //rotas relacionadas às operações com cursos e contatos
 const Cursos = require('../api/cursos/service');
 const Contatos = require('../api/contato/service');
 Cursos.register(router, '/cursos'); // pegar o resultado do serviço e dar a rota para ele
 Contatos.register(router, '/contatos');
};