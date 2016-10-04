(function () {
  'use strict';

  angular.module('ktest2')
    .provider('$books', $books);


  /** @ngInject */

  function $books() {

    var savedData = null;

    function prepareSeverDate(data) {

      for (var i in data) {
        data[i].reliseDate = new Date(data[i].reliseDate);
        data[i].publishedDate = new Date(data[i].publishedDate);
      }
      return data;
    }

    return {
      $get: function ($config, $q, $http, $timeout) {
        return {
          getBooks: function () {
            var dfd = $q.defer();

            if (savedData == null) {
              $http.get($config.apiUrl + 'data.json')
                .then(function (resp) {
                  savedData = prepareSeverDate(resp.data);
                  dfd.resolve(savedData);
                }, function () {
                  dfd.reject();
                });
            } else {
              $timeout(function () {
                dfd.resolve(savedData);
              });
            }


            return dfd.promise;
          },
          deleteBook: function (id) {
            var dfd = $q.defer();

            $timeout(function () {
              for (var i in savedData) {
                if (savedData[i]['_id'] == id) {
                  savedData.splice(i, 1)
                }
              }
            });

            return dfd.promise;

          },
          addBook: function (book) {
            var dfd = $q.defer();

            $timeout(function () {
              savedData.push(book);

            });
            return dfd.promise;
          }
        }
      }
    }
  }

})();
