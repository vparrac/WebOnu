const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan  = require('morgan');
const engine = require("ejs-mate");
const indexRouter = require('./routes/index');
const registrarRouter = require("./routes/registrar")
const flash = require("connect-flash");
const session = require("express-session");
const bodyParser = require("body-parser");


const app = express();
// view engine setup
app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public", "views"));

app.use(morgan('dev'));
app.use(express.json());

/**
 * Esta configuración nos permite recibir los datos desde el cliente
 * Recibe un objeto con los atributos a modificar. En este caso el extended
 * en false nos indica que no recibiremos archivos pesados como imagenes o documentos
 */
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/registrar', registrarRouter);


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
