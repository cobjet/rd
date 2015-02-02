var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function(req, res) {
  res.set('Content-Type', 'text/plain');
  res.send(fs.readFileSync('contract.js', 'utf-8')).end();
});

app.listen(process.env.PORT || 5000);
