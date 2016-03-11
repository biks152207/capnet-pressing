;(function () {
  "use strict";

  var app = angular.module("capNetPressingApp");

  /**
   * locationsListingController
   * @param {Factory} dataService [Return API data]
   */
  function locationsListingController (dataService) {
    var _locations = [];

    var init = function () {
      dataService.getLocations(function (response) {
        _locations = response.data.locations;
      });
    }

    init();

    /**
     * getLocations: Get the locations
     * @return {Array} [Array of objects which contains the dry cleaning's locations]
     */
    this.getLocations = function () {
      return _locations;
    }
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
