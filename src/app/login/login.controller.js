(function () {
  'use strict';

  angular.module('ktest2')
    .controller('LoginController', LoginController);

  /** @ngInject */

  function LoginController(AuthService, $state, $config) {
    var vm = this;

    vm.activate = activate;
    vm.login = login;
    vm.activate();


    function login() {
      AuthService.login();
      $state.go($config.defaultState);
      console.log('111');
    }

    function activate() {
      if (!AuthService.isAuthenticated()) {
        $state.go($config.defaultState);
      }
    }
  }

})();
