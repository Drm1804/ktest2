(function () {
  'use strict';

  angular.module('ktest2')
    .controller('BooksController', BooksController);

  /** @ngInject */

  function BooksController(AuthService, $state, $config) {
    var vm = this;

    vm.activate = activate;
    vm.activate();



    function activate() {


    }
  }

})();
