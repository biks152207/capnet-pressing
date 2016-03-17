;(function () {
  "use strict";

  var app = angular.module("capNetPressingApp");

  /**
   * contactController
   * @param  {Object} $rootScope
   * @param  {Object} $http
   */
  function contactController ($rootScope, $http) {
    var _formData = {
      lastName: "",
      firstName: "",
      email: "",
      phone: "",
      address: "",
      message: ""
    };

    // SEO
    $rootScope.meta = {
      title: "Contactez-nous | Cap'Net Pressing",
      desc: "La société Cap'Net se fait un immense plaisir de vous accueillir à Lyon et de vous proposer ses services de pressing et de nettoyage à sec.",
      keywords: "Pressing 69, Nettoyage a sec Villeurbanne, Nettoyage cuir et dain 69, Nettoyage cuir et dain Lyon, Nettoyage cuir et dain Lyon Centre, Nettoyage cuir et dain Villeurbanne, Retouche 69, Retouche Lyon, Retouche Lyon Centre, Nettoyage a sec Lyon Centre"
    };

    /**
     * Get form data
     * @return {Object}
     */
    this.getFormData = function () {
      return _formData;
    }

    /**
     * sendEmail
     */
    this.sendEmail = function () {

      console.log(_formData);

      $http.post("/api/contact", _formData)
           .success(function(_formData, status) {


        console.log("Sucess!");
      })
    }
  }

  app.directive("contact", function () {
    return {
      restrict: "A",
      templateUrl: "scripts/modules/contact/contact.html",
      controller: contactController,
      controllerAs: "contactCtrl"
    }
  });
})();
