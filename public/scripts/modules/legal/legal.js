;(function () {
  "use strict";

  var app = angular.module("capNetPressingApp");

  /**
   * legalController
   */
  function legalController () {

  }

  app.directive("legal", function () {
    return {
      restrict: "A",
      replace: false,
      templateUrl: "scripts/modules/legal/legal.html",
      controller: legalController,
      controllerAs: "legalCtrl"
    }
  });
})();
