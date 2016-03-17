;(function () {
  "use strict";

  var express = require("express");
  var router = express.Router();

  /* GET legal page. */
  router.get("/", function(req, res, next) {
    res.render("index.html");
  });

  module.exports = router;
})();
