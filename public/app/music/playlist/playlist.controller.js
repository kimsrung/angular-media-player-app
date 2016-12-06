(function() {
  'use strict';

  angular
    .module('app.music')
    .controller('UserPlayListCtrl', UserPlayListCtrl);

  UserPlayListCtrl.$inject = [
    '$state',
    'PlayListSrv',
    'navigationMenuService'
  ]

  function UserPlayListCtrl($state, PlayListSrv, navigationMenuService) {
    var vm = this;
    var UserPlaylistVar = [];

    vm.PlayListSrv = PlayListSrv;
    vm.playlistUrl = $state.href($state.current.name, $state.params, {absolute: true});

    activate();

    function activate() {
      PlayListSrv.getPlaylist($state.params.title, function (response) {
        vm.playlistName = response.name;
        vm.playlistImage = response.image;
        vm.playlistBanner = response.banner;
        vm.playlistGenre = response.genre;
        vm.playlistUrlName = response.url_name;


        if (angular.isDefined(response.songs)) {

          _.map(response.songs, function (song) {
            var parseTitle = song.displayName.match(/(.*?)\s?-\s?(.*)?$/);
            UserPlaylistVar.push({
              id: song.id,
              image: song.image,
              src: song.url,
              url: song.url,
              type: song.type,
              artist: parseTitle[1],
              title: parseTitle[2],
              displayName:song.displayName,
              lyrics: song.lyrics
            });
          });

          vm.userPlaylist = UserPlaylistVar;
        }

      });
    }

    vm.addSongs = function (playlist, callback) {
      _.each(UserPlaylistVar, function (audioElement) {
        playlist.push(angular.copy(audioElement));

        if ((UserPlaylistVar.indexOf(audioElement) + 1) == UserPlaylistVar.length) {
          // Callback goes here
          if (callback) {
            callback();
          }
        }

      });

      navigationMenuService.menu = false;
      navigationMenuService.playlist = true;

    };

    vm.addSongsAndPlay = function (playlist, mediaPlayer) {

      vm.addSongs(playlist, function () {

        setTimeout(function () {
          mediaPlayer.play();
        }, 1000);

      });

    };

    vm.addSongToPlaylist = function(song,playlist){

      PlayListSrv.addSongToPlaylist(song,playlist);
    };

    vm.removeSongFromPlaylist = function(song,playlist){

      PlayListSrv.removeSongFromPlaylist(song,playlist);

      //Remove from client so he notices immediately
      vm.userPlaylist = _.without(vm.userPlaylist,song);
    };
  }
})();

