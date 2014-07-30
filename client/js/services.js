exports.fetchAsk = function($http) {

  var runAskRequest = function(askUrl) {
    return $http.get(askUrl);
  }

  return {
    ask: function(askUrl) {
      return runAskRequest(askUrl);
    }
  };

};
