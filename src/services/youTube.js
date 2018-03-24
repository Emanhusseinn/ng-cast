angular.module('video-player')
.service('youTube', function($http){
  // TODO
  this.search = function(params, callback) {
      // Simple GET request example:
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: params
      }).then(response => callback(response)).catch(error => console.log(error));
  };
});
