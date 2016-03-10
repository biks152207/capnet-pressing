"use strict";

var express = require("express"),
    locations = require("../../mock/locations.json");

var api = express.Router();

api.get("/locations", function (req, res) {
  res.json({ locations: locations });
})

module.exports = api;
