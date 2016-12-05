(function() {
  'use strict';

  angular
    .module('app.music')
    .factory('CreatePlaylistSrv', CreatePlaylistSrv);

  CreatePlaylistSrv.$inject = [
    '$uibModal',
    '$log',
    'PlayListSrv',
    '$location'
  ]

  function CreatePlaylistSrv($uibModal, $log, PlayListSrv, $location) {

    /**************************
     Provides a way to create a new playlist
     **************************/

    var CreatePlayListSrvObj = {
      openCreateModal: openCreateModal
    };

    return CreatePlayListSrvObj;

    function openCreateModal(song){

      var modalInstance = $uibModal.open({
        templateUrl: 'app/music/playlist/create_playlist.html',
        controller: 'CreatePlaylistInstanceCtrl',
        resolve: {
         playlistName: function () {
           return '';
         },
         song: function () {
           return song;
         }
        }
      });

      modalInstance.result.then(function (response) {
        var songs = [];
        var playlistName = response.playlistName;
        var url_name = playlistName.toLowerCase().replace(" ","-");
        var new_playlist = {
          url_name: url_name,
          name: playlistName,
          banner: 'dist/images/playlists/playlistbanner.jpg',
          image: 'dist/images/songs/song17.jpg',
          genre: [],
          songs: songs
        };

        if(angular.isDefined(response.song)){
          songs.push(response.song);
        }

        //Callback for a Okay on Save new playlist

        PlayListSrv.put(new_playlist,function(response){
          window.location = "#/playlist/" + url_name;
        });

        }, function () {
          console.log('Modal dismissed at: ' + new Date());
        });

        };

  }
})();

