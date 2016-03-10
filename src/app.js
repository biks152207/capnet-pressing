"use strict";

var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

var api = express.Router();
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

api.get("/locations", function (req, res) {
  res.json({
    locations: [
      {
        name: "Lyon 2 - Ferrandière",
        address: "24 rue Ferrandiere",
        city: "Lyon",
        zip: "69002",
        phone: "+33 4 78 42 27 96",
        hours: {
          weekdays: ["07:30", "19:15"],
          saturday: ["08:00", "18:00"]
        }
      },
      {
        name: "Lyon 2 - Charité",
        address: "41 Rue de la Charité",
        city: "Lyon",
        zip: "69002",
        phone: "+33 4 78 37 90 95",
        hours: {
          weekdays: ["07:30", "19:00"],
          saturday: ["08:00", "18:00"]
        }
      },
      {
        name: "Lyon 2 - Bellecour",
        address: "54 rue Sala",
        city: "Lyon",
        zip: "69002",
        phone: "+33 4 72 56 04 13",
        hours: {
          weekdays: ["08:00", "12:30", "14:00", "19:00"],
          saturday: ["08:00", "14:00"]
        }
      },
      {
        name: "Lyon 3 - Montchat",
        address: "88 Cours du docteur Long",
        city: "Lyon",
        zip: "69003",
        phone: "+33 4 72 36 32 13",
        hours: {
          weekdays: ["07:30", "19:00"],
          saturday: ["08:00", "19:00"]
        }
      },
      {
        name: "Lyon 7 - Thibaudière",
        address: "50 Rue de la Thibaudière",
        city: "Lyon",
        zip: "69007",
        phone: "+33 4 72 71 03 29",
        hours: {
          weekdays: ["07:45", "19:15"],
          saturday: ["08:00", "19:00"]
        }
      }
    ]
  });
})

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
