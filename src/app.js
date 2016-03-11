;(function () {
  "use strict";

  var express = require("express");
  var path = require("path");
  var favicon = require("serve-favicon");
  var logger = require("morgan");
  var cookieParser = require("cookie-parser");
  var bodyParser = require("body-parser");
  var api = require("./api");

  var indexRoute = require("../routes/index");
  var locationRoute = require("../routes/location");
  var servicesRoute = require("../routes/services");
  var contactRoute = require("../routes/contact");
  var aboutRoute = require("../routes/about");
  var legalRoute = require("../routes/legal");

  var app = express();

  // View engine setup
  app.set("views", path.join(__dirname, "../views"));
  app.set("view engine", "ejs");
  app.engine("html", require("ejs").renderFile);

  // TODO @kla: Uncomment after placing your favicon in /public
  // app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
  app.use(logger("dev"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use("/", express.static(path.join(__dirname, "../public")));

  app.use("/", indexRoute);
  app.use("/location", locationRoute);
  app.use("/services", servicesRoute);
  app.use("/contact", contactRoute);
  app.use("/about", aboutRoute);
  app.use("/legal", legalRoute);

  app.use("/api", api);

  // Catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
  });

  // Error handlers

  // Development error handler
  // Will print stacktrace
  if (app.get("env") === "development") {
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
