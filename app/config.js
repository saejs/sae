// Carregar envs
require('dotenv').config();

module.exports = {
    "development": {
       
        "host"     : process.env.DB_HOST,
        "database" : process.env.DB_DBNAME,
        "username" : process.env.DB_USER,
        "password" : process.env.DB_PASS,
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