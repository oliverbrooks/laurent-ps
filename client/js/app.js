var angular = require('angular');
var controllers = require('./controllers');

var app = angular.module('LaurentsApp', []);
app.controller('requestController', ['$scope', '$http', '$location', controllers.main]);
app.controller('answerController', ['$scope', '$http', controllers.answer]);

module.exports = app;
