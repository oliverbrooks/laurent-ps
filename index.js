var express = require("express");
var browserify = require('browserify-middleware');
var app = express();

//provide browserified versions of all the files in a directory
app.use('/js/app.js', browserify('./client/js/app.js'));

app.use(express.static(__dirname + '/client'));

app.listen(3000);
