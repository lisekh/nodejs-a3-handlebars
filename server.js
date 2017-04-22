var express = require('express');
var exphbs=require('express-handlebars');
var app = express();
var path = require('path');

app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

app.engine('handlebars', exphbs({defaultLayout:'main'}));

var routes = require('./routes/routes.js');

app.get('/', routes.home);
app.get('/:city', routes.city);

// Port and start listening
app.set('port', process.env.PORT || 8080);
app.listen(app.get('port'));