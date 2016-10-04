(function () {
  'use strict';

  angular.module('ktest2')
    .config(function ($stateProvider) {
      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'app/login/login.html',
          controller: 'LoginController',
          controllerAs: 'lgn'
        });
    })

})();
