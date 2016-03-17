;(function () {
  "use strict";

  var app = angular.module("capNetPressingApp");

  /**
   * locationsController
   */
  function locationsController () {
    var map;
    var initMap = function () {
      map = new google.maps.Map(document.getElementById("js_google_map"), {
        center: { lat: 45.764043, lng: 4.835659 },
        zoom: 13
      });
    };
    initMap();
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
