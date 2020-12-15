const app = require('sae-framework');

// Register routes
require('./app/routes')(app);

app.listen(8080);