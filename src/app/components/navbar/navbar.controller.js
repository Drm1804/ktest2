(function () {
  'use strict';

  angular.module('ktest2')
    .controller('NavbarController', NavbarController);

  /** @ngInject */
  function NavbarController(AuthService){
    var vm = this;
    vm.logout = logout;

    function logout(){
      AuthService.logout();
    }
  }

})();
