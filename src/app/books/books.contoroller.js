(function () {
  'use strict';

  angular.module('ktest2')
    .controller('BooksController', BooksController);

  /** @ngInject */

  function BooksController($books, localStorageService) {
    var vm = this;
    vm.books = null;
    vm.sort  = '';
    vm.sortDesc = false;

    vm.activate = activate;
    vm.deleteBook = deleteBook;
    vm.getBooks = getBooks;
    vm.sortFunc = sortFunc;
    vm.activate();

    function sortFunc(typeSort) {
      if (vm.sort !== typeSort) {
        vm.sortDesc = false;
        vm.sort = typeSort;
      } else {
        if (!vm.sortDesc) {
          vm.sortDesc = true;
        } else {
          vm.sort = '';
          vm.sortDesc = false;
        }
      }
      localStorageService.set('sort', vm.sort);
      localStorageService.set('sortDesc', vm.sortDesc);

    }

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
      vm.sort = localStorageService.get('sort');
      vm.sortDesc = localStorageService.get('sortDesc');
      vm.getBooks();
    }
  }

})();
