exports.main = function($scope, $http, $location) {

  var askId = window.location.pathname.split("/")[2];

  $http.get('/api/asks/' + askId).success(function(data){
    $scope.request = data;
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
