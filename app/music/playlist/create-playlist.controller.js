(function() {
  'use strict';

  angular
    .module('app.music')
    .controller('CreatePlaylistInstanceCtrl', CreatePlaylistInstanceCtrl);

  CreatePlaylistInstanceCtrl.$inject = [
    '$scope',
    '$uibModalInstance',
    'playlistName',
    'song',
    'loggit'
  ]

  function CreatePlaylistInstanceCtrl($scope, $uibModalInstance, playlistName, song, loggit) {
    var vm = this;

    $scope.playlistName = playlistName;
    $scope.song = song;

    $scope.ok = function () {

      if($scope.playlistName !== ""){
        $uibModalInstance.close($scope);
      }
      else {
        $uibModalInstance.dismiss('cancel');
        loggit.logError("Error! Could not create a playlist with no name..");
      }
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }
})();

