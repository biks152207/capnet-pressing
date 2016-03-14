;(function () {
  "use strict";

  var app = angular.module("capNetPressingApp");

  /**
   * contactController
   */
  function contactController () {

  }

  app.directive("contact", function () {
    return {
      restrict: "A",
      replace: false,
      templateUrl: "scripts/modules/contact/contact.html",
      controller: contactController,
      controllerAs: "contactCtrl"
    }
  });
})();
