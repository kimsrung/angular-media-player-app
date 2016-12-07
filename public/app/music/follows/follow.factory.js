(function() {
  'use strict';

  angular
    .module('app.music')
    .factory('FollowSrv', FollowSrv);

  FollowSrv.$inject = [
    '$http'
  ]

  function FollowSrv($http) {
    var albums = [];
    /**************************
     Provides a way to create a new playlist
     **************************/

    var FollowObj = {
      getFollows: getFollows
    };

    return FollowObj;

    function getFollows(callback){
      $http.get('dist/data/albums.json').success(function(data) {

        albums = data;

        FollowObj.albums = albums;
        callback(data);

      });
    }

  }
})();

