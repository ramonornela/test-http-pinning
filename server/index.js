#! /usr/env/node
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const urlencoded = bodyParser.urlencoded({ extended: false })

app.use(urlencoded);
app.use(bodyParser.json());

app.get('/test-get', (req, res) => {
  console.log(req.query);
  res.send('Foo');
});

app.post('/test-post', (req, res) => {
  console.log(req.body);
  res.send('Ok');
});

app.put('/test-put', (req, res) => {
  console.log(req.body);
  res.send('Ok');
});

app.delete('/test-delete', (req, res) => {
  console.log(req.query);
  res.send('Ok');
});

app.listen(3000);
