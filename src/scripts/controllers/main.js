"use strict";

angular.module("capNetPressingApp")
       .controller("mainCtrl", function ($scope, dataService) {

  dataService.getLocations(function (response) {
    var locations = response.data.locations;
    $scope.locations =  locations;
  });

})
