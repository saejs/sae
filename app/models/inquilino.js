'use strict';

module.exports = (sequelize, DataTypes) => {

    const Inquilino = sequelize.defineModel('Inquilino', 'inquilinos', {
        // Ns = Namespace
        ns: {
            type: DataTypes.STRING(60),
            allowNull: false,
            unique: true,
            validate: {
                len: [2,36],
                isLowercase: true,
            }
        },

        // Nome
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2,60],
            }
        },

        // Situção
        situacao: {
            type: DataTypes.ENUM,
            values: ['atv', 'blo'],
            allowNull: false,
            defaultValue: 'blo',
            validate: {
                is: /^atv|blo$/i,
            }
        },
    });

    // Constantes
    Inquilino.ST_ATIVO     = 'atv';
    Inquilino.ST_BLOQUEADO = 'blo';

    Inquilino.associate = function (models) {
        // associations can be defined here
    };

    return Inquilino;
};