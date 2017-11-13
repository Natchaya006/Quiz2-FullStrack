var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var customer = require('./customer.js');
app.get('/users', customer.findAll);
app.get('/users/search', customer.findUserByName);
app.get('/users/role/:role', customer.findRole);
app.listen(3000);
console.log('Server is running at http://localhost:3000');