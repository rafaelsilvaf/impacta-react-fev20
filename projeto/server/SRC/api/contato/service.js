//serviços rest
const model = require('./model');
model.methods(['get', 'post']); // listar, salvar
model.updateOptions({ new: true, runValidators: true }); // se aceita novo
module.exports = model;
