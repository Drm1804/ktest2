(function() {
  'use strict';

  angular
    .module('ktest2')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('auth', {
        abstract: true,
        template: '<div ui-view=""></div>',
        resolve: {
          auth: function (AuthService, $q, $timeout, $state, $config) {
            var dfd = $q.defer();
            $timeout(function(){
              console.log(AuthService.isAuthenticated());
              if(AuthService.isAuthenticated()){
                dfd.resolve();
              } else{
                $state.go($config.loginState);
                dfd.reject();
              }
            });
            return dfd.promise;
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
