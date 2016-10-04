(function () {
  'use strict';

  angular.module('ktest2')
    .service('AuthService', AuthService);

  /** @ngInject*/
  function AuthService(localStorageService){
    var service = {
      isAuth: null,
      isAuthenticated: isAuthenticated,
      login: login,
      logout: logout
    };

    var iaAuth = localStorageService.get('token');
    iaAuth ? service.isAuth = true : service.isAuth = false;

    return service;

    function login(){
      localStorageService.set('isAuth', true);
    }

    function logout(){
      localStorageService.set('isAuth', false);
    }

    function isAuthenticated() {
      return service.isAuth;
    }
  }

})();
