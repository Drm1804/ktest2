(function () {
  'use strict';

  angular.module('ktest2')
    .config(function ($stateProvider) {
      $stateProvider
        .state('auth.books', {
          url: '/',
          templateUrl: 'app/books/books.html',
          controller: 'BooksController',
          controllerAs: 'bks'
        });
    })

})();
