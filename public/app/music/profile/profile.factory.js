(function() {
  'use strict';

  angular
    .module('app.music')
    .factory('ProfileSrv', ProfileSrv);

  ProfileSrv.$inject = [
    '$http'
  ]

  function ProfileSrv($http) {
    var albums = [];
    /**************************
     Provides a way to create a new playlist
     **************************/

    var ProfileObj = {
      getProfile: getProfile
    };

    return ProfileObj;

    function getProfile(callback){
      // $http.get('dist/data/albums.json').success(function(data) {

      //   albums = data;

      //   ProfileObj.albums = albums;
      //   callback(data);

      // });
      var data = {
        username: 'Kimsrung',
        number: '85569270000',
        BOD: '14/11/1990',
        image_url: 'http://www.aucet.in/civil/staffs/male.jpg'
      }
      callback(data);
    }

  }
})();

