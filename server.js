const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieSession = require('cookie-session');
const cors = require('cors');
const passport = require('passport');
const passportSetup = require('./config/passport');
// Always require and configure near the top
require('dotenv').config();
// Connect to the database
require('./config/database');

const app = express();
app.use(cookieSession({
  name: "session",
  keys: ["loom"],
  maxAge: 24*60*60*1000
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));


app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
// middleware to verify token and assign user object of payload to req.user
// mount before routes
app.use(require('./config/checkToken'));

const port = process.env.PORT || 3001;

// Put API routes here, before the "catch all" route

app.use('/api/users', require('./routes/api/users'));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX/API requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});
