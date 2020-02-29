// arquivo responsavel pelo config do banco de dados

//está pegando a promise do nosso node e enviando para o mongoose
const mongoose = require("mongoose");

mongoose.Promise = global.Promise; //para evitar warnings 
module.exports = mongoose.connect('mongodb://localhost:27017/projeto-cursos',{ useNewUrlParser: true, useUnifiedTopology: true  });
