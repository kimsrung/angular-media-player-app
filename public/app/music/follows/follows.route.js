(function() {
  'use strict';

  angular
    .module('app.music')
    .config(config);

  config.$inject = [
    '$stateProvider'
    ]

  function config($stateProvider) {
    $stateProvider
    .state('layout.follows', {
      url: '/follows',
      controller: 'FollowsCtrl',
      controllerAs: 'follows',
      templateUrl: 'app/music/follows/follows.html'
    })
    .state('layout.follows.detail', {
      views: {
          'albums': {
            templateUrl: 'app/music/follows/albums.html'
          },
          'artist': {
            templateUrl: 'app/music/follows/artist.html'
          },
          'playlists': {
            templateUrl: 'app/music/follows/playlists.html'
          }
        }
    })
  }
})();

