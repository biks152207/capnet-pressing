;(function () {
  "use strict";

  var app = angular.module("capNetPressingApp");

  /**
   * navigationController
   */
  function navigationController () {

  }

  app.directive("navigation", function () {
    return {
      restrict: "A",
      templateUrl: "scripts/modules/shared/navigation.html",
      controller: navigationController,
      controllerAs: "navigationCtrl"
    }
  });
})();
