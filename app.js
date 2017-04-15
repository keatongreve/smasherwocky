var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var userRoutes = require('./api/routes/UserRoutes');
var matchRoutes = require('./api/routes/MatchRoutes');

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/smasherwocky');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser())

app.use('/api/users', userRoutes);
app.use('/api/matches', matchRoutes);

app.set('views', __dirname + '/app/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', require('./app/routes').index);

module.exports = app;
