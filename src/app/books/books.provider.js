(function () {
  'use strict';

  angular.module('ktest2')
    .provider('$books', $books);


  /** @ngInject */

  function $books() {
    return {
      $get: function ($config, $q, $http) {
        return {
          getBooks: function () {
            var dfd = $q.defer();

            $http.get($config.apiUrl + 'data.json')
              .then(function (resp) {
                dfd.resolve(resp.data);
              }, function () {
                dfd.reject();
              });

            return dfd.promise;
          }
        }
      }
    }
  }

})();
