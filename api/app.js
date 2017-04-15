var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var userRoutes = require('./routes/UserRoutes');
var matchRoutes = require('./routes/MatchRoutes');

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/smasherwocky');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/matches', matchRoutes);

module.exports = app;
