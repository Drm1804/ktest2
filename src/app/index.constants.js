(function() {
  'use strict';

  angular
    .module('ktest2')
    .constant('$config', {
      apiUrl:'/',
      defaultState: 'auth.books',
      loginState: 'login'
    })

})();
