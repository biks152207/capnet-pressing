;(function () {
  "use strict";

  var app = angular.module("capNetPressingApp");

  /**
   * navigationController
   * @param {Object} $state
   */
  function navigationController ($state) {

    /**
     * Get active CSS class: Highlight the current item in the navigation.
     * @param  {String} [URL of the item in the navigation]
     * @return {Object} [CSS class "active" if the item is selected]
     */
    this.getClass = function (link) {
      return {
        active: $state.current.url === link
      };
    }
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
