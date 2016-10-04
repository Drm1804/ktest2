(function () {
  'use strict';

  angular.module('ktest2')
    .service('AuthService', AuthService);

  /** @ngInject*/
  function AuthService(localStorageService){
    var service = {
      iaAuth: null,
      isAuthenticated: isAuthenticated,
      login: login,
      logout: logout
    };

    var iaAuth = localStorageService.get('token');
    iaAuth ? service.iaAuth = true : service.iaAuth = false;


    return service;

    function login(){
      localStorageService.set('iaAuth', true);
    }

    function logout(){
      localStorageService.set('iaAuth', false);
    }

    function isAuthenticated() {
      return service.iaAuth;
    }
  }



})();
