// Model >           > Controller >           > View
//       > data flow >            > data flow >
// Holds >           > Processes  >           > Renders

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

require('./theAPI/model/dbConnector');

app.set('views', path.join(__dirname, 'theServer', 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

var serverRoutes = require('./theServer/routes/indexSR');
var apiRoutes = require('./theAPI/routes/indexAR');

app.use('/', serverRoutes);
app.use('/api', apiRoutes);

module.exports = app;