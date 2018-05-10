const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.raw();
const urlencodedParser = bodyParser.urlencoded({extended: false})

//conexion a la base de datos

const mongoose = require('mongoose');
const mongodbRoute = 'mongodb://server-movil:server-movil@ds219100.mlab.com:19100/marcadores';
const port = 3001;
const mongodbOptions = {
    socketTimeoutMS: 0,
    keepAlive: true,
    reconnectTries: 30
};

mongoose.Promise = global.Promise
const db = mongoose.connect(mongodbRoute, mongodbOptions, (err) => {
    if (err) {
        return console.log(`Error al conectar a la base de datos: ${err}`)
    }
    app.listen(port, () => {
        console.log(`Servidor up en ${port}`);
    });
    console.log(`Conexión a mongo correcta.`)
});










var indexRouter = require('./routes/index');
var usersRouter = require('./routes/marker');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
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
