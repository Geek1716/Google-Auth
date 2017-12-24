var express = require('express');
var app = express();
var morgan = require('morgan');
var passport = require('passport');
var mongoose = require('mongoose');
var cookieSession = require('cookie-session');


mongoose.connect('mongodb://127.0.0.1/test');

app.set('view engine', 'ejs');
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ['hahaha']
}));

app.use(morgan('dev'));
app.use(passport.initialize());
app.use(passport.session());

require('./app/routes')(app,passport);
require('./config/passport');


app.listen(8080);
console.log("Server is running on port 8080");