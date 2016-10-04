(function () {
  'use strict';

  angular.module('ktest2')
    .controller('BookController', BookController);


  /** @njInject*/
  function BookController($book, $state, $stateParams, $config) {
    var vm = this;
    vm.id = null;
    vm.minDate = '1800-01-01';
    vm.data = null;

    vm.activate = activate;
    vm.addAuthor = addAuthor;
    vm.deleteAuthor = deleteAuthor;
    vm.getBook = getBook;
    vm.setBook = setBook;
    vm.editBook = editBook;
    vm.activate();

    function setBook() {
      $book.setBook(vm.data)
        .then(function () {
          $state.go($config.defaultState)
        });
    }

    function getBook(id) {
      $book.getBook(id)
        .then(function (resp) {
          vm.data = resp;
        });
    }

    function addAuthor() {
      var clearData = {
        first: null,
        last: null
      };
      vm.data.authors.push(clearData);
    }

    function deleteAuthor(author) {
      for (var i in vm.data.authors) {
        if (vm.data.authors[i].first === author.first && vm.data.authors[i].last === author.last) {
          vm.data.authors.splice(i, 1);
          break;
        }
      }
    }

    function editBook() {
      alert('На этом месте новые данные отправились на сервер, но поскольку в качестве сервера используется файл, данные не сохраняются');
      $state.go('auth.books');
    }

    function activate() {
      vm.id = $stateParams.id;
      if (vm.id == '') {
        vm.data = {
          publishedDate: null,
          reliseDate: null,
          authors: [
            {
              "first": null,
              "last": null
            }
          ]
        }
      } else {
        vm.getBook(vm.id);
      }
    }

  }
})();
