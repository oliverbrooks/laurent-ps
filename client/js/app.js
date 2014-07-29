var angular = require('angular');
var controllers = require('./controllers');

var app = angular.module('LaurentsApp', []);
app.controller('requestController', ['$scope', '$http', controllers.main]);

module.exports = app;
