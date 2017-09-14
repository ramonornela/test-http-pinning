#! /usr/env/node
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const urlencoded = bodyParser.urlencoded({ extended: false })

app.get('/test-get', (req, res) => {
  console.log(req.query);
  res.send('Foo');
});

app.post('/test-post', urlencoded, (req, res) => {
  console.log(req.body);
  res.send('Ok');
});

app.listen(3000);
