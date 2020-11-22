var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongo = require('./db/mongo')
const redis = require('./db/redis')
var cors = require('cors')

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

//CONNECTION TO MONGO DATABASE
mongo.connectToServer( function( err, client ) {
  if (err) console.log(err);
} );
//CONNECTION TO REDIS DATABASE
redis.connectToServer(function( err, client ) {
  if (err) console.log(err);
} );

//SET ROUTES
var indexRouter = require('./routes/index');
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send('error');
});

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), () => {
  console.log('Server listening on 5000')
})

module.exports = app;
