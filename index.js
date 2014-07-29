var express = require('express');
var browserify = require('browserify-middleware');
var app = express();
var fs = require('fs');
var morgan = require('morgan');
var request = require('superagent');

//
// Config
//
if(process.env.NODE_ENV !== 'production') {
  // load in config
  require("./config")
}

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
  request
    .get(process.env.PS_HOST + process.env.PS_BASE_PEARL_URL)
    .send(req.query)
    .set("authorization", "Bearer " + process.env.BEARER)
    .set("Accept", "application/json")
    .end(function(err, psRes){
      // console.log(err, psRes.body);
      res.send(psRes.body);
    });
  // fs.readFile('./data/basePearls.json', {encoding: 'utf-8'}, function(err, data){
  //   if (err) next(new Error(err));
  //   res.send(data);
  // })
});

app.get('/requests/:requestId', function(req, res){
  res.set('Content-Type', 'application/json');
  var url = process.env.PS_HOST + process.env.PS_REQUEST_URL + '/' + req.param('requestId')
  request
    .get(url)
    .send(req.query)
    .set("authorization", "Bearer " + process.env.BEARER)
    .set("Accept", "application/json")
    .end(function(err, psRes){
      // console.log(err, psRes.body);
      res.send(psRes.body);
    });
  // fs.readFile('./data/request.json', {encoding: 'utf-8'}, function(err, data){
  //   if (err) next(new Error(err));
  //   res.send(data);
  // })
});

app.post('/requests/:requestId/answers', function(req, res){
  res.set('Content-Type', 'application/json');
  res.send({'uid': req.param('requestId')});
});

//
// start app
//
app.listen(process.env.PORT, function(){
  console.log('app started on port ' + process.env.PORT);
});
