;(function () {
  "use strict";

  var express = require("express");
  var router = express.Router();

  /* GET contact page. */
  router.get("/", function(req, res, next) {
    res.render("contact.html");
  });

  module.exports = router;
})();
