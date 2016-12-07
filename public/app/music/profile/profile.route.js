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
    .state('layout.profile', {
      url: '/profile',
      templateUrl: 'app/music/profile/profile.html',
      controller: 'ProfileCtrl',
      controllerAs: 'profile'
    })
  }
})();

