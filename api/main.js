const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const {device, token} = require('./config');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/gettemp', function(req, res){
    axios.get(`https://mdash.net/api/v2/devices/${device}/rpc/Temp.Read?access_token=${token}`)
    .then(function (response) {
        res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});


app.get('/gethumid', function(req, res){
    axios.get(`https://mdash.net/api/v2/devices/${device}/rpc/Humid.Read?access_token=${token}`)
    .then(function (response) {
        res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get('/setledon', function(req, res){
    axios.get(`https://mdash.net/api/v2/devices/${device}/rpc/Led.On?access_token=${token}`)
    .then(function (response) {
        res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get('/setledoff', function(req, res){
    axios.get(`https://mdash.net/api/v2/devices/${device}/rpc/Led.Off?access_token=${token}`)
    .then(function (response) {
        res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(4000);