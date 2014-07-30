var angular = require('angular');
var controllers = require('./controllers');
var services = require('./services');

var app = angular.module('LaurentsApp', []);

app.factory('askService', services.fetchAsk);

app.controller('askController', ['$scope', '$http', 'askService', controllers.main]);
app.controller('answerController', ['$scope', '$http', controllers.answer]);

module.exports = app;
