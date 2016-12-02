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
    '$timeout',
    'angularPlayer'
  ]

  function LyricDialogController($scope, $filter, $timeout, angularPlayer) {
    var ctrl = this;
    ctrl.show = false;
    ctrl.open = open;
    ctrl.lyricSeekTrack = lyricSeekTrack;

    $scope.$watch('lyricChange', function (old) {
      if (angular.isDefined(old)) {
        var highlight = angular.element(".highlight")[0];
        if (angular.isDefined(highlight)) { highlight.scrollIntoView(); };
      };

    })

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
                $scope.lyricChange = value;
                ctrl.currentTime = key
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
      if(!$scope.currentPlaying) {
        $timeout(function () {
          angularPlayer.play()
        })
      };

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

