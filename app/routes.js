const InquilinoController = require('./controllers/InquilinoController');
const { Inquilino } = require('./models');

module.exports = (app) => {

    //InquilinoController.register(app);

    app.resource('/inquilinos', Inquilino, 'Inquilino');
}