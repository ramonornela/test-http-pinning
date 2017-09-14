#! /usr/env/node
const express = require('express');
const app = express();

app.get('/test-get', (req, res) => {
  console.log(req.query);
  res.send('Foo');
});

app.listen(3000);
