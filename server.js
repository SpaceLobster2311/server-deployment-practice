'use strict';
// importing dependancy
const express = require('express');
//initializing dependancy
const app = express();
const Person = require('./Person.js');

app.get('/', (req, res) => {
  res.send('thanks');
});

app.get('/data', (req, res) => {
  //should respond with a person
  res.send(new Person('Alex', 28));

});

module.exports = app;
