var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mainRouter = require('./routes/main');
var clientsRouter = require('./routes/clients');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// MIDDLEWARE // Acceso no disponible entre las 17.00 y las 8:00

app.use((req,res,next) => {
  const date = new Date();
  const hourToday = date.getHours();
  if(hourToday >= 17 || hourToday < 8){
    console.log("No service available" );
    res.send("<div style='text-align:center;padding:2em'>" + "<h3>" + "It is " + (date.getHours() + ":" + (date.getMinutes()<10?'0':'') + date.getMinutes() + "h." ) + "</h3>" + " Sorry : / No service available" + "<br>" + "<br>" + "Our customer service is from 8:00 to 17:00h. Thank you." + "</div>");
  } else {
    console.log( "Working time!" );
    next(); //this must go here, thanks Mario!
  }
});

//ROUTES\\
app.use('/', mainRouter);
app.use('/clients', clientsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
