var schema;

var Interacao;

var Usuario = schema.define('Usuario', {
    email: {
        type: String,
        length: 255
    },
    nome: String,
    dataNascimento: Date,
    profissao: String,
    cargo: String,
    auth_thoken: String,
    provedor: {
        type: String,
        default: 'Facebook'
    }
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
    table: 'Usuarios'
});

Usuario.hasMany(Interacao, {
    as: 'interacoes',
    foreignKey: 'usuarioId'
});

module.exports = function (s, i) {
    schema = s;
    Interacao = i;
    return Usuario;
};
