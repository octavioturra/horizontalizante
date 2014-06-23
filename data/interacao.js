var Schema = require('jugglingdb').Schema;
var schema, Palavra, Usuario;
var Interacao = schema.define('Interacao', {
    texto: Schema.Text,
    tipo: String,
    referencia: {
        type: String,
        length: 255
    },
    dataCriacao: {
        type: Date,
        default: function () {
            return new Date();
        }
    },
    ativo: {
        type: Boolean,
        default: true
    }
}, {
    table: 'Interacoes'
});

Interacao.belongsTo(Palavra, {
    as: 'palavra',
    foreignKey: 'palavraId'
});
Interacao.belongsTo(Usuario, {
    as: 'autor',
    foreignKey: 'usuarioId'
});

module.exports = function (s, p, u) {
    schema = s;
    Palavra = p;
    Usuario = u;
    return Palavra;
};
