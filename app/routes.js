const { Inquilino } = require('./models');
//const InquilinoController = require('./controllers/InquilinoController');

module.exports = (app) => {

    //InquilinoController.register(app);

    app.resource('/inquilinos', Inquilino, 'Inquilino', { search: ['ns','nome']});
}