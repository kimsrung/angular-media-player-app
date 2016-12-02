(function() {
  'use strict';

  angular
    .module('app.music')
    .component('lyricDialog', {
      templateUrl: 'app/components/lyric-dialog/lyric-dialog.html',
      controller: LyricDialogController
    });

  LyricDialogController.$inject = [
    '$scope',
    '$filter',
    'angularPlayer'
  ]

  function LyricDialogController($scope, $filter, angularPlayer) {
    var ctrl = this;
    ctrl.show = false;
    ctrl.open = open;
    ctrl.lyricSeekTrack = lyricSeekTrack;

    $scope.$on('track:id', function(event, data) {
      ctrl.currentPlaying= angularPlayer.currentTrackData();
      ctrl.sound = soundManager.getSoundById(angularPlayer.getCurrentTrack());
    });

    $scope.$on('currentTrack:position', function(event, data) {
      if(angular.isUndefined(ctrl.currentPlaying)) {return };
      var keepGoing = true;
      var currentPostion = $filter('humanTime')(data);

      angular.forEach(ctrl.currentPlaying.lyrics, function (lyric) {
        if(keepGoing) {
          angular.forEach(lyric, function (value, key) {
              if (currentPostion < key) {
                ctrl.currentLyric = value;
                keepGoing = false;
              }
          })
        }
      })
    });

    function open(ev) {
      ctrl.show = true;
    }

    function lyricSeekTrack(index) {
      var time = '00:00';
      var timeInMilliseconds = 0;

      if (index != 0 ) {
        time = Object.keys(ctrl.currentPlaying.lyrics[index-1])[0];
        timeInMilliseconds = ( Number(time.split(':')[0])*60 + Number(time.split(':')[1]) ) * 1000;
      }

      ctrl.sound.setPosition(timeInMilliseconds);
    }

  }
})();

