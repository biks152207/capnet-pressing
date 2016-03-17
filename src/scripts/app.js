;(function () {
  "use strict";

  angular.module("capNetPressingApp", ["ui.router"])
         .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

      $locationProvider.html5Mode(true);

      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state("index", {
          url: "/",
          views: {
            "mainContainer@": {
              template: "<div index></div>"
            }
          }
        })
        .state("locations", {
          url: "/locations",
          views: {
            "mainContainer@": {
              template: "<div locations></div>"
            }
          }
        })
        .state("services", {
          url: "/services",
          views: {
            "mainContainer@": {
              template: "<div services></div>"
            }
          }
        })
        .state("contact", {
          url: "/contact",
          views: {
            "mainContainer@": {
              template: "<div contact></div>"
            }
          }
        })
        .state("about", {
          url: "/about",
          views: {
            "mainContainer@": {
              template: "<div about></div>"
            }
          }
        })
        .state("legal", {
          url: "/legal",
          views: {
            "mainContainer@": {
              template: "<div legal></div>"
            }
          }
        });
    });
})();
