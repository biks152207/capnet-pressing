;(function () {
  "use strict";

  angular.module("capNetPressingApp")
         .service("dataService", function ($http) {

    this.getLocations = function(cb) {
      $http.get("/api/locations").then(cb);
    };

  });
})();
