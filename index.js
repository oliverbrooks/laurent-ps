var express = require('express');
var browserify = require('browserify-middleware');
var app = express();
var fs = require('fs');
var morgan = require('morgan');

//
// Config
//
PORT = 3000;

//
// Middleware
//
app.use(morgan('combined'));

//provide browserified versions of all the files in a directory
app.use('/js/app.js', browserify('./client/js/app.js'));

app.use(express.static(__dirname + '/client'));

//
// Routes
//
app.get('/basePearls', function(req, res){
  res.set('Content-Type', 'application/json');
  fs.readFile('./data/basePearls.json', {encoding: 'utf-8'}, function(err, data){
    if (err) next(new Error(err));
    res.send(data);
  })
});

app.get('/requests/:requestId', function(req, res){
  res.set('Content-Type', 'application/json');
  fs.readFile('./data/request.json', {encoding: 'utf-8'}, function(err, data){
    if (err) next(new Error(err));
    res.send(data);
  })
});

app.post('/requests/:requestId/answers', function(req, res){
  res.set('Content-Type', 'application/json');
  res.send({'uid': req.param('requestId')});
});

//
// start app
//
app.listen(PORT, function(){
  console.log('app started on port ' + PORT);
});
