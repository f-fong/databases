var express = require('express');
var db = require('./db');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set('port', 3000);


app.use(function(req, res, next) { // return CORS headers
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use('/classes', router);

// Serve the client files
app.use('/static', express.static(__dirname + '/../client'));

app.on('request', function(request, response) {
  console.log(request.method);
  console.log(reuest.headers);
  response.end();
});


// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}

