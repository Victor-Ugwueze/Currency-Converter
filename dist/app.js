'use strict';

var express = require('express');

var path = require('path');

var app = express();

app.use(express.static('dist'));
app.get('/', function (req, res) {
    res.sendFile('index.html');
});
var port = 3000;

app.listen(port, function () {
    return console.log("App Running on port 3000");
});