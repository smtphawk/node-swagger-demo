var express = require('express');
var app = express();
var db = require('./db');
var router = express.Router(),
  bodyParser = require('body-parser'),
  swaggerUi = require('swagger-ui-express'),
  swaggerDocument = require('./swagger.json');
  
  
var UserController = require('./user/UserController');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/users', UserController);

module.exports = app;