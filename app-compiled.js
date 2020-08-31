"use strict";

require('dotenv/config');

var express = require('express');

var http = require('http');

var path = require('path');

var passport = require('passport');

var bodyParser = require('body-parser');

var cors = require('cors');

var app = express();
var port = process.env.PORT || 8080;

var user = require('./routes/user'); // DB configuration


require('./dbConfig/database'); // use static file


app.use(express["static"](path.join(__dirname, 'public'))); // set middleware

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json()); // middleware for Cross Origin Resource Sharing

app.use(cors()); // initialize passport

app.use(passport.initialize());
app.use(passport.session());

require('./middleware/passport')(passport);

app.set('port', port);
app.use('/user', user);
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
var server = http.createServer(app);
server.listen(port, function () {
  console.log("The app is running on port ".concat(port));
});
