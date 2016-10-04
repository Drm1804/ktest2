(function () {
  'use strict';

  angular.module('ktest2')
    .provider('$book', $book);


  /** @ngInject */

  function $book() {

    function prepareServerDate(data){
      data.reliseDate = new Date(data.reliseDate);
      data.publishedDate = new Date (data.publishedDate);
      return data;
    }

    return {
      $get: function ($config, $q, $http) {
        return {
          getBook: function (id) {
            var dfd = $q.defer();

            $http.get($config.apiUrl + 'data.json')
              .then(function (resp) {

                var rData = resp.data.filter(function(item){
                  return item['_id'] === id;
                });
                var returnedData = prepareServerDate(rData[0]);
                dfd.resolve(returnedData);

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
