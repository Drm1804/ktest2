(function () {
  'use strict';

  angular.module('ktest2')
    .filter('ISNB', ISNB);

  function ISNB() {
    return function (input) {
      var d = String(input);
      if(d.length !== 13){
        return input;
      }
      d = d[0]+d[1]+d[2]+'-'+d[3]+'-'+d[4]+d[5]+'-'+d[6]+d[7]+d[8]+d[9]+d[10]+d[11]+'-'+d[12];
      return d;
    }
  }


})();
