(function() {
  'use strict';

  angular
    .module('ktest2')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
