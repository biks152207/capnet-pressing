;(function () {
  "use strict";

  var express = require("express"),
      locations = require("../../mock/locations.json");

  var api = express.Router();

  api.get("/locations", function (req, res) {
    res.json({ locations: locations });
  })

  api.post("/contact", function (req, res) {
    res.sendStatus(200);
  })

  module.exports = api;
})();
