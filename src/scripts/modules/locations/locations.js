;(function () {
  "use strict";

  var app = angular.module("capNetPressingApp");

  /**
   * locationsController
   */
  function locationsController () {

  }

  app.directive("locations", function () {
    return {
      restrict: "A",
      replace: false,
      templateUrl: "scripts/modules/locations/locations.html",
      controller: locationsController,
      controllerAs: "locationsCtrl"
    }
  });
})();
