;(function () {
  "use strict";

  var app = angular.module("capNetPressingApp");

  /**
   * indexController
   * @param  {Object} $rootScope
   */
  function indexController ($rootScope) {

    // SEO
    $rootScope.meta = {
      title: "Cap'Net Pressing",
      desc: "La société Cap'Net se fait un immense plaisir de vous accueillir à Lyon et de vous proposer ses services de pressing et de nettoyage à sec.",
      keywords: "Pressing 69, Nettoyage a sec Villeurbanne, Nettoyage cuir et dain 69, Nettoyage cuir et dain Lyon, Nettoyage cuir et dain Lyon Centre, Nettoyage cuir et dain Villeurbanne, Retouche 69, Retouche Lyon, Retouche Lyon Centre, Nettoyage a sec Lyon Centre"
    };
  }

  app.directive("index", function () {
    return {
      restrict: "A",
      templateUrl: "scripts/modules/index/index.html",
      controller: indexController,
      controllerAs: "indexCtrl"
    }
  });
})();
