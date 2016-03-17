;(function () {
  "use strict";

  var app = angular.module("capNetPressingApp");

  /**
   * servicesController
   * @param  {Object} $rootScope
   */
  function servicesController ($rootScope) {
    var _descriptionsActive = {
      commonServices: false,
      leatherAndDeer: false,
      appliedServices: false,
      carpet: false,
      retouch: false
    };

    // SEO
    $rootScope.meta = {
      title: "Services | Cap'Net Pressing",
      desc: "Le nettoyage à sec, la blanchisserie et le repassage de vêtements, de draps ou de tissus d’ameublement ainsi le nettoyage et le traitement de cuirs, de daims, de tapis, tels sont les services assurés par la firme Cap'Net.",
      keywords: "Pressing 69, Nettoyage a sec Villeurbanne, Nettoyage cuir et dain 69, Nettoyage cuir et dain Lyon, Nettoyage cuir et dain Lyon Centre, Nettoyage cuir et dain Villeurbanne, Retouche 69, Retouche Lyon, Retouche Lyon Centre, Nettoyage a sec Lyon Centre"
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
      templateUrl: "scripts/modules/services/services.html",
      controller: servicesController,
      controllerAs: "servicesCtrl"
    }
  });
})();
