(function() {
  'use strict';

  angular
    .module('app.music')
    .controller('ProfileCtrl', ProfileCtrl);

  ProfileCtrl.$inject = [
    '$scope',
    'ProfileSrv'
  ]

  function ProfileCtrl($scope, ProfileSrv) {
    var vm = this;

    activate();

    function activate() {
      ProfileSrv.getProfile(function(data) {
        vm.data = data;
      // no need to read data because its binded to $scope.AlbumsSrv
      // You can however process something only after the data comes back
      });
    }
  }
})();

