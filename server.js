const app = require('sae-framework');
const path = require('path');

// Register app version route
app.version(path.resolve(__dirname, 'package.json'));

// Register routes
require('./app/routes')(app);

app.listen(8080);