exports.main = function($scope, $http) {

  $http.get('/requests/:requestId').success(function(data){
    $scope.request = data;
    console.log($scope.request);
  });
};

exports.fish = function(){}
