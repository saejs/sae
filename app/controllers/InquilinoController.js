const { Inquilino } = require('../models');

class InquilinoController
{
    /**
     * Lista models.
     */
    static async list(req, res) {
        var ret = await Inquilino.findAll();

        res.json(ret);
    }

    /**
     * Register routes of controller.
     */
    static register(app) {
        app.get('/inquilinos', this.list);
    }
}

module.exports = InquilinoController;