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
  fs.readFile('./data/basePearls', function(err, data){
    res.json(data);
  })
})

// 
// start app
// 
app.listen(PORT, function(){
  console.log('app started on port ' + PORT);
});
