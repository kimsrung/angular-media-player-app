;(function() {
'use strict';

  angular
    .module('app.music')
    .factory('translationLoader', translationLoader)

  translationLoader.$inject = [
    '$q',
    '$timeout'
  ]

  function translationLoader($q, $timeout) {
    return function (options) {
      var deferred = $q.defer(),
          translations;

      if (options.key === 'en') {
        translations = {
          ARTISTS: 'Artists',
          ALBUMS: 'Albums',
          DASHBOARD: 'Dashboard',
          GENRES: 'genres'
        };
      } else {
        translations = {
          ARTISTS: 'សិល្បករ',
          ALBUMS: 'អាល់ប៊ុម',
          DASHBOARD: 'ផ្ទាំងគ្រប់គ្រង',
          GENRES: 'ប្រភេទ'
        };
      }

      $timeout(function () {
        deferred.resolve(translations);
      }, 2000);

      return deferred.promise;
    }
  }
})();