(function() {
  'use strict';

  angular
    .module('app.music')
    .controller('ArtistListingCtrl', ArtistListingCtrl);

  ArtistListingCtrl.$inject = [
    '$scope',
    'ArtistListingSrv'
  ]

  function ArtistListingCtrl($scope, ArtistListingSrv) {
    var vm = this;
    vm.owlItems = [];
    vm.owlOptions = {
        items: 8,
        slideBy: 8,
        nav: true,
        navText: ['<i class="fa fa-angle-left fa-3x" aria-hidden="true"></i>', '<i class="fa fa-angle-right fa-3x" aria-hidden="true"></i>']
    };

    activate();

    function activate() {
      ArtistListingSrv.getArtists(function(data) {
        vm.data = data;
        vm.owlItems = data;
      // no need to read data because its binded to $scope.AlbumsSrv
      // You can however process something only after the data comes back
      });
    }
  }
})();

