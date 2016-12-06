;(function () {
  'use strict';

  angular
    .module('app.music')
    .directive('highlightActive', highlightActive);

  highlightActive.$inject = []

  function highlightActive() {
    return {
        controller: ["$scope", "$element", "$attrs", "$state",
            function($scope, $element, $attrs, $state) {
                var links = $element.find("a");
                var path = $state.$current.name;

                highlightActive(links, path)

                $scope.$watch(function(){
                    return $state.$current.name;
                }, function(newVal, oldVal){
                  if (newVal) {
                    return newVal !== oldVal ? highlightActive(links, newVal) : void 0;
                  }
                })

                function highlightActive(links, path) {
                    return angular.forEach(links, function(link) {
                        var $link = angular.element(link);
                        var $li = $link.parent("li");
                        var href = $link.attr("ui-sref");

                        return $li.hasClass("active") && $li.removeClass("active"), 0 === path.indexOf(href) ? $li.addClass("active") : void 0;
                    });
                }
            }
        ]
    };
  }
})();