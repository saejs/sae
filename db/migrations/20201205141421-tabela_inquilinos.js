'use strict';

module.exports = {
  up: async (schema, Sequelize) => {

    await schema.createTable('inquilinos', {

        id: {
            type: Sequelize.STRING(36),
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
        },
        
        ns: {
            type: Sequelize.STRING(60),
            allowNull: false,
            unique: 'ax_inquilinos_ns',
        },

        nome: {
            type: Sequelize.STRING(60),
            allowNull: false,
        },
        
        situacao: {
            type: Sequelize.ENUM,
            values: ['atv','blo'],
            allowNull: false,
            defaultValue: 'blo',
        },

        created_at: {
            type: Sequelize.DATE,
            allowNull: false,
        },

        updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
        },

    }, {
        uniqueKeys: {
            ax_inquilinos_ns: {
                fields: ['ns']
            }
        }
    });
  },

  down: async (schema, Sequelize) => {
    await schema.dropTable('inquilinos');
  }
};
