"use strict";

require('dotenv/config');

var express = require('express');

var http = require('http');

var path = require('path'); // const passport = require('passport');


var bodyParser = require('body-parser');

var cors = require('cors');

var app = express();
var port = process.env.PORT || 8080; // use static file

app.use(express["static"](path.join(__dirname, 'public'))); // set middleware

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json()); // middleware for Cross Origin Resource Sharing

app.use(cors());
app.get('/*', function (req, res) {
  res.send("Hello Babel");
});
app.set('port', port);
var server = http.createServer(app);
server.listen(port, function () {
  console.log("The app is running on port ".concat(port));
});
