;(function () {
  "use strict";

  var app = angular.module("capNetPressingApp");

  /**
   * aboutController
   */
  function aboutController () {

  }

  app.directive("about", function () {
    return {
      restrict: "A",
      templateUrl: "scripts/modules/about/about.html",
      controller: aboutController,
      controllerAs: "aboutCtrl"
    }
  });
})();
