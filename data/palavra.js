var Schema = require('jugglingdb').Schema;
var schema, Interacao;
var Palavra = schema.define('Palavra', {
    valor: {
        type: String,
        length: 128
    },
    descricao: {
        type: String,
        legnth: 4096
    },
    qrcode: Schema.Text,
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
    table: 'Palavras'
});

Palavra.hasMany(Interacao, {
    as: 'interacoes',
    foreignKey: 'palavraId'
});

module.exports = function (s, i) {
    schema = s;
    Interacao = i;
    return Palavra;
};
