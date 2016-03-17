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
      templateUrl: "scripts/modules/legal/legal.html",
      controller: legalController,
      controllerAs: "legalCtrl"
    }
  });
})();
