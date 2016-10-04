(function () {
  'use strict';

  angular.module('ktest2')
    .directive('navbar', navbar);

  /** @ngInject */
  function navbar(){
    return{
      restrict: 'E',
      controller: 'NavbarController',
      controllerAs: 'nvbr'
    }
  }


})();
