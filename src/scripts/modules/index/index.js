;(function () {
  "use strict";

  var app = angular.module("capNetPressingApp");

  /**
   * indexController
   */
  function indexController () {

  }

  app.directive("index", function () {
    return {
      restrict: "A",
      replace: false,
      templateUrl: "scripts/modules/index/index.html",
      controller: indexController,
      controllerAs: "indexCtrl"
    }
  });
})();
