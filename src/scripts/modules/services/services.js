;(function () {
  "use strict";

  var app = angular.module("capNetPressingApp");

  /**
   * servicesController
   */
  function servicesController () {
    var _descriptionsActive = {
      commonServices: false,
      leatherAndDeer: false,
      appliedServices: false,
      carpet: false,
      retouch: false
    };

    /**
     * toggleDescription: Toggle the description on click
     * @param  {String} serviceName [Name of the dry cleaning service]
     */
    this.toggleDescription = function (serviceName) {

      _descriptionsActive[serviceName] = !_descriptionsActive[serviceName];
    }

    /**
     * getActiveClassDescription: get the CSS class "active" or not depending of
     * of if the description should be visible or not.
     * @param  {String} serviceName [Name of the dry cleaning service]
     * @return {String}             [CSS class]
     */
    this.getActiveClassDescription = function (serviceName) {

      return _descriptionsActive[serviceName]? "active": "";
    }
  }

  app.directive("services", function () {
    return {
      restrict: "A",
      replace: false,
      templateUrl: "scripts/modules/services/services.html",
      controller: servicesController,
      controllerAs: "servicesCtrl"
    }
  });
})();
