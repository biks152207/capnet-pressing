;(function () {
  "use strict";

  var express = require("express"),
      path = require("path"),
      favicon = require("serve-favicon"),
      logger = require("morgan"),
      cookieParser = require("cookie-parser"),
      bodyParser = require("body-parser"),
      api = require("./api"),
      router = require("../routes/index");

  var app = express();

  require("dotenv").config();

  // View engine setup
  app.set("views", path.join(__dirname, "../views"));
  app.set("view engine", "ejs");

  app.use(favicon(path.join(__dirname, "../public/images/favicon/favicon.ico")));
  app.use(logger("dev"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use("/", express.static(path.join(__dirname, "../public")));

  app.use("/api", api);
  app.use("*", router);

  // Catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
  });

  // Set a default Google Maps API key (Only available on localhost:3000)
  if (!process.env.GOOGLE_MAPS_API_KEY) {
    process.env.GOOGLE_MAPS_API_KEY = "AIzaSyAuDixR3dXmRr2g1PVzFAm5pLUkf7VWc5E";
  }

  // Error handlers

  // Development error handler
  // Will print stacktrace
  if (process.env.NODE_ENV === "development") {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render("error", {
        message: err.message,
        error: err
      });
    });
  }

  // Production error handler
  // No stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: {}
    });
  });

  module.exports = app;
})();
