;(function () {
  "use strict";

  angular.module("capNetPressingApp", ["ui.router"])
         .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

      $locationProvider.html5Mode(true);

      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state("index", {
          url: "/",
          templateUrl: "scripts/modules/index/index.html"
        })
        .state("locations", {
          url: "/locations",
          templateUrl: "scripts/modules/locations/locations.html"
        })
        .state("services", {
          url: "/services",
          templateUrl: "scripts/modules/services/services.html"
        })
        .state("contact", {
          url: "/contact",
          templateUrl: "scripts/modules/contact/contact.html"
        })
        .state("about", {
          url: "/about",
          templateUrl: "scripts/modules/about/about.html"
        })
        .state("legal", {
          url: "/legal",
          templateUrl: "scripts/modules/legal/legal.html"
        });
    });
})();
