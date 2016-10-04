/*eslint angular/on-watch: 0*/

(function() {
  'use strict';

  angular
    .module('ktest2')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope) {

    $log.debug('runBlock end');

    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
      $log.error(event);
      $log.error(toState);
      $log.error(toParams);
      $log.error(fromState);
      $log.error(fromParams);
      $log.error(error);
    });
  }

})();
