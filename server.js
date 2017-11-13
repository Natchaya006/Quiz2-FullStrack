var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var user = require('./user.js');
app.get('/users', user.findAll);
app.get('/users/search', user.findUserByName);
app.get('/users/role/:role', user.findRole);
app.listen(3000);
console.log('Server is running at http://localhost:3000');