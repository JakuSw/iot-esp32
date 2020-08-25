const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const {device, token} = require('./config');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/gettemp', function(req, res){
  res.json({temperature: 23});
});

app.get('/gethumid', function(req, res){
  res.json({humidity: 50});
});

app.get('/readled', function(req, res){
  res.json({ledState: 'Off'});
});

app.get('/setledon', function(req, res){
  res.json({ledState: 'On'});
});

app.get('/setledoff', function(req, res){
  res.json({ledState: 'Off'});
});

app.listen(4000);