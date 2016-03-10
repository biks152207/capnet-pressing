"use strict";

angular.module("capNetPressingApp")
       .service("dataService", function ($http) {

  this.getLocations = function(cb) {
    $http.get("/mock/locations.json").then(cb);
  };

});
