require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const logger = require('morgan');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const debug = require('debug')("angularauth:" + path.basename(__filename).split('.')[0]);
const authRoutes = require('./routes/auth');
const centersRoute = require('./routes/centers');
const dashRoutes = require('./routes/dashboard');
const invitationRoute = require('./routes/invitations');
const jobRoutes = require('./routes/job');
const alertRoutes = require('./routes/alerts');
const mongoose = require('mongoose');
const cors = require('cors');


require('./config/database');
const app = express();

var whitelist = ['http://localhost:4200'];



var corsOptions = {
    origin: true,
    credentials: true
};
app.use(cors(corsOptions));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.PATH_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 365
  },
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  })
}));
require('./passport/serializers');
require('./passport/local');
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', authRoutes);
app.use('/api', dashRoutes);
app.use('/api', jobRoutes);
app.use('/api', centersRoute);
app.use('/api', invitationRoute);
app.use('/api', alertRoutes);

app.all('/*', function (req, res) {
   res.sendFile(__dirname + '/public/index.html');
 });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.error(err);
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
