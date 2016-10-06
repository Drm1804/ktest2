(function () {
  'use strict';

  angular.module('ktest2')
    .directive('navBar', navbar);

  /** @ngInject */
  function navbar(){
    return{
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: 'NavbarController',
      controllerAs: 'nvbr'
    }
  }


})();
