//serviços rest
const model = require('./model');
model.methods(['get', 'post', 'put', 'delete']); // listar, salvar, editar, deletar
model.updateOptions({ new: true, runValidators: true }); // se aceita novo
module.exports = model;