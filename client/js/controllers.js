exports.main = function($scope, $http, askService) {
  var askId = window.location.pathname.split("/")[2];
  var askUrl = '/api/asks/' + askId;

  askService.ask(askUrl).success(function(data) {
    $scope.ask = data;
  });
};

exports.answer = function($scope, $http){

  $scope.fetch = function (query) {
    $http.get('/api/basePearls?query=' + query + '&type=venue').success(function(data){
      $scope.basePearls = data;
    });
  };

  $scope.send = function (basePearlId, askId) {
    $http.post('/api/asks/' + askId + '/answers', basePearlId).success(function(data) {
      alert(data.uid);
    });
  };
};
