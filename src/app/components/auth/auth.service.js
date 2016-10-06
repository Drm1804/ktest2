(function () {
  'use strict';

  angular.module('ktest2')
    .service('AuthService', AuthService);

  /** @ngInject*/
  function AuthService(localStorageService, $state, $config) {
    var service = {
      isAuth: null,
      isAuthenticated: isAuthenticated,
      login: login,
      logout: logout
    };

    var iaAuth = localStorageService.get('isAuth');
    iaAuth ? service.isAuth = true : service.isAuth = false;

    return service;

    function login() {
      service.isAuth = true;
      localStorageService.set('isAuth', true);
    }

    function logout() {
      service.isAuth = false;
      localStorageService.set('isAuth', false);
      $state.go($config.defaultState, null, {reload: true})
    }

    function isAuthenticated() {
      return service.isAuth;
    }
  }

})();
