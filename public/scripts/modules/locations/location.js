"use strict";

angular.module("capNetPressingApp")
       .directive("location", function(){
  return {
    templateUrl: "scripts/modules/locations/location.html",
    replace: true,
    controller: "locationCtrl"
  }
});
