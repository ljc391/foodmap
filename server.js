'use strict';

const express = require('express');
const volleyball = require('volleyball');

const app = express();

var db = require('./models');
app.use(volleyball);

app.use(express.static(__dirname));

app.use('/api', require('./routes'));
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('The server is listening closely on port', port);
  db.sync()
  .then(function () {
    console.log('Synchronated the database');
  })
  .catch(function (err) {
    console.error('Trouble right here in River City', err, err.stack);
  });
});