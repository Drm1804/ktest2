(function() {
  'use strict';

  angular
    .module('ktest2')
    .config(config);

  /** @ngInject */
  function config($logProvider, localStorageServiceProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    localStorageServiceProvider
      .setPrefix('ktest2')
      .setStorageType('localStorage');
  }

})();
