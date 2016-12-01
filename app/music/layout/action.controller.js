(function() {
  'use strict';

  angular
    .module('app.music')
    .controller('ActionsCtrl', ActionsCtrl);

  ActionsCtrl.$inject = [
    '$scope',
    '$translate'
  ]

  function ActionsCtrl($scope, $translate) {
    var vm = this;
    vm.language = 'en';

    vm.toggleChat = function () {
      $('.chat-bar').toggleClass("visible");
    };

    vm.setLang = function (key) {
      $translate.use(key);
      vm.language = key;
    }

  }
})();

