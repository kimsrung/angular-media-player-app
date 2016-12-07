(function() {
  'use strict';

  angular
    .module('app.music')
    .controller('FollowsCtrl', FollowsCtrl);

  FollowsCtrl.$inject = [
    '$scope',
    '$state',
    'FollowSrv'
  ]

  function FollowsCtrl($scope, $state, FollowSrv) {
    var vm = this;

    activate();

    function activate() {
      FollowSrv.getFollows(function(data) {
        vm.data = data;
        $state.go('layout.follows.detail');
      // no need to read data because its binded to $scope.AlbumsSrv
      // You can however process something only after the data comes back
      });
    }
  }
})();

