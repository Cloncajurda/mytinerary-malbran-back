import 'dotenv/config.js';
import __dirname from './utils.js';
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import errorHandler from './middlewares/errorHandler.js';
import notFoundHandler from './middlewares/notFoundHandler.js';
// import cookieParser from 'cookie-parser'; Modulo para manejo de cookies
import logger from 'morgan'; //hace un registro de la peticion
import indexRouter from './routes/index.js'; // Solo configuro las rutas del enrutador del back ppal, que llamará al resto de los recursos.

let app = express(); // ejecuta el modulo de Express.

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Router
app.use('/api', indexRouter);

// catch 404 and forward to error handler
app.use(notFoundHandler);

// error handler
app.use(errorHandler);

export default app;