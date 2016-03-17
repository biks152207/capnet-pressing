;(function () {
  "use strict";

  var app = angular.module("capNetPressingApp");

  /**
   * locationsController
   * @param  {Object} $rootScope
   */
  function locationsController ($rootScope) {

    // Google Maps
    var map;
    var initMap = function () {
      map = new google.maps.Map(document.getElementById("js_google_map"), {
        center: { lat: 45.764043, lng: 4.835659 },
        zoom: 13
      });
    };
    initMap();

    // SEO
    $rootScope.meta = {
      title: "Nous situer | Cap'Net Pressing",
      desc: "La société Cap'Net se fait un immense plaisir de vous accueillir à Lyon et de vous proposer ses services de pressing et de nettoyage à sec.",
      keywords: "Pressing 69, Nettoyage a sec Villeurbanne, Nettoyage cuir et dain 69, Nettoyage cuir et dain Lyon, Nettoyage cuir et dain Lyon Centre, Nettoyage cuir et dain Villeurbanne, Retouche 69, Retouche Lyon, Retouche Lyon Centre, Nettoyage a sec Lyon Centre"
    };
  }

  app.directive("locations", function () {
    return {
      restrict: "A",
      templateUrl: "scripts/modules/locations/locations.html",
      controller: locationsController,
      controllerAs: "locationsCtrl",
    }
  });
})();
