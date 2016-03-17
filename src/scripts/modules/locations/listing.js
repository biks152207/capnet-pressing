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

    /**
     * getHoursNotice: Display a different notice depening of if the dry cleaning
     * pause for lunch or not
     * @param  {Array} hours [Array containing the opening, lunch and closing hours]
     * @return {String}      [Sentence: Hours notice]
     */
    this.getHoursNotice = function (hours) {

      var nb_hours = hours.length,
          sentence = "";

      if (nb_hours === 2) {

        sentence = "Horaires (non-stop) :";
      }
      else {

        sentence = "Horaires :";
      }

      return sentence;
    }

    /**
     * formatHours: Format the hours from [08:00, 16:00] to "from 8am to 4pm"
     * @param  {Array} hours [Array containing the opening, lunch and closing hours]
     * @return {String}      [Sentence describing the hours of the dry cleaning]
     */
    this.formatHours = function (hours) {

      var nb_hours = hours.length,
          opening_hour = hours[0],
          lunch_start_hour = "",
          lunch_end_hour = "",
          closing_hour = hours[hours.length - 1],
          sentence = "";

      if (nb_hours === 2) {

        sentence = "de " + opening_hour + " à " + closing_hour;
      }
      else if (nb_hours === 4) {

        lunch_start_hour = hours[1];
        lunch_end_hour = hours[2];
        sentence = "de " + opening_hour + "-" + lunch_start_hour + " et " + lunch_end_hour + "-" + closing_hour;
      }

      return sentence;
    }
  }

  app.directive("locationsListing", function () {
    return {
      restrict: "A",
      templateUrl: "scripts/modules/locations/listing.html",
      controller: locationsListingController,
      controllerAs: "locationsListingCtrl"
    }
  });
})();
