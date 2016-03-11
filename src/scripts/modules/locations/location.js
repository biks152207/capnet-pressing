;(function () {
  "use strict";

  var app = angular.module("capNetPressingApp");

  /**
   * locationController
   * @param {Object}  $scope
   * @param {Factory} dataService [Return API data]
   */
  function locationController ($scope, dataService) {

    dataService.getLocations(function (response) {
      var locations = response.data.locations;
      $scope.locations =  locations;
    });

  }

  app.directive("location", function () {
    return {
      restrict: "A",
      replace: false,
      templateUrl: "scripts/modules/locations/location.html",
      controller: locationController,
      controllerAs: "locationCtrl"
    }
  });
})();
