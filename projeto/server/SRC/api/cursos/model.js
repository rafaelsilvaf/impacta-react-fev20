//criando o schema
const restful = require('node-restful');
const { Schema } = restful.mongoose; //referência ao mongoose do restful

const cursos = new Schema ({
    codigo : {type: Number, require:true},
    descricao: { type: String, require:true},
    cargaHoraria :{type:Number, require:true, min:4},
    preco : {type: Number,require: true, min : 0 },
    categoria : { type:String,require:true, uppercase: true,
    enum: ['INFORMATICA',  'REDES', 'ADMINISTRACAO', 'ENGENHARIA']}


});
module.exports = restful.model('cursos', cursos);

// deixar a tabela disponivel, exportar ela