const path = require('path');
const app = require('sae-framework');
const saeAwsLambdaFunction = require('sae-aws-lambda');
const serverlessExpressMiddleware = require('@vendia/serverless-express/middleware');

// Adicionar controle para o lambda.
app.on('booted', (app, routes) => {
    routes.use(serverlessExpressMiddleware.eventContext());
});

// Register app version route
app.version(path.resolve(__dirname, 'package.json'));

// Register routes
require('./app/routes')(app);

exports.handler = saeAwsLambdaFunction(app.$route);