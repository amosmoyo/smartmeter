require('dotenv/config');

const express = require('express');

const http = require('http');

const path = require('path');

const passport = require('passport');

const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();

const port = process.env.PORT || 8080;

const user = require('./routes/user');

// DB configuration
require('./dbConfig/database');

// use static file
app.use(express.static(path.join(__dirname, 'public')));

// set middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// middleware for Cross Origin Resource Sharing
app.use(cors());

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

require('./middleware/passport')(passport);

app.set('port', port);

app.use('/user', user);

app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`The app is running on port ${port}`);
})
