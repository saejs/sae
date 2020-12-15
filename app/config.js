const { connectionStringParser } = require('sae-framework/src/db/connections');

// Carregar envs
require('dotenv').config();

var info = {
    host      : '',
    database  : '',
    username  : '',
    password  : '',
};

// Carregar string connection
if (process.env.DB_CONNECTION) {
    info = connectionStringParser(process.env.DB_CONNECTION);
    if (!info) {
        throw "String de conexão não foi informada";
    }
}


// Configurações
module.exports = {
    "development": {
       
        "host"     : info.host,
        "database" : info.database,
        "username" : info.username,
        "password" : info.password,
        "dialect"  : process.env.DB_DIALECT ? process.env.DB_DIALECT : "mysql",
        "timezone" : process.env.TZ ? process.env.TZ : "America/Sao_Paulo",

        "dialectOptions": {
            "timezone": "local"
        },

        "logging"                   : 0,
        "operatorsAliases"          : 0,
        "migrationStorageTableName" : "migrations"
    }
};