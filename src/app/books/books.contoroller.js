(function () {
  'use strict';

  angular.module('ktest2')
    .controller('BooksController', BooksController);

  /** @ngInject */

  function BooksController($books) {
    var vm = this;
    vm.books = null;

    vm.activate = activate;
    vm.deleteBook = deleteBook;
    vm.getBooks = getBooks;
    vm.activate();

    function getBooks() {
      $books.getBooks()
        .then(function (resp) {
          vm.books = resp;
        });
    }

    function deleteBook(id){
      $books.deleteBook(id)
        .then(function () {
          vm.getBooks();
        });
    }

    function activate() {
      vm.getBooks();
    }
  }

})();
