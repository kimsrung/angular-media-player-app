(function() {
  'use strict';

  angular
    .module('app.music')
    .controller('NavCtrl', NavCtrl);

  NavCtrl.$inject = [
    'navigationMenuService'
  ]

  function NavCtrl(navigationMenuService) {
    var vm = this;

    vm.navigationState = navigationMenuService;
    vm.SwitchToMenu = SwitchToMenu;
    vm.SwitchToPlaylist = SwitchToPlaylist;

    function SwitchToMenu() {
      navigationMenuService.menu = true;
      navigationMenuService.playlist = false;
    };

    function SwitchToPlaylist() {
      navigationMenuService.menu = false;
      navigationMenuService.playlist = true;
    };

  }
})();

