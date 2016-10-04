(function () {
  'use strict';

  angular.module('ktest2')
    .controller('BooksController', BooksController);

  /** @ngInject */

  function BooksController($books) {
    var vm = this;
    vm.books = null;

    vm.activate = activate;
    vm.getBooks = getBooks;
    vm.activate();

    function getBooks() {
      $books.getBooks()
        .then(function (resp) {
          vm.books = resp;
        });
    }

    function activate() {
      vm.getBooks();
    }
  }

})();
