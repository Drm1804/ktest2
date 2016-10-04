(function () {
  'use strict';

  angular.module('ktest2')
    .config(function ($stateProvider) {
      $stateProvider
        .state('auth.book', {
          url: '/book/:id',
          templateUrl: 'app/book/book.html',
          controller: 'BookController',
          controllerAs: 'bk'
        });
    })

})();
