;(function () {
  "use strict";

  var app = angular.module("capNetPressingApp");

  /**
   * locationsListingController
   * @param {Object}  $scope
   * @param {Factory} dataService [Return API data]
   */
  function locationsListingController ($scope, dataService) {

    dataService.getLocations(function (response) {
      var locations = response.data.locations;
      $scope.locations =  locations;
    });

  }

  app.directive("locationsListing", function () {
    return {
      restrict: "A",
      replace: false,
      templateUrl: "scripts/modules/locations/listing.html",
      controller: locationsListingController,
      controllerAs: "locationsListingCtrl"
    }
  });
})();
