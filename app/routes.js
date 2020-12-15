const path = require('path');
const { Inquilino } = require('./models');
//const InquilinoController = require('./controllers/InquilinoController');

module.exports = (app) => {

    // Register app version route
    app.version(path.resolve(__dirname, '..', 'package.json'));

    //InquilinoController.register(app);

    app.resource('/inquilinos', Inquilino, 'Inquilino', { search: ['ns','nome']});

    app.get('/', (req, res) => {
        console.log('OLA MUNDO');
        console.log('req: ', req);
        console.log('res: ', res);

        res.json({
            'method': 'GET',
            'engine': 'sae.js'
        });
    });
}