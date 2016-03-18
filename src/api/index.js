;(function () {
  "use strict";

  var express = require("express"),
      locations = require("../../mock/locations.json");

  var api = express.Router();

  require("dotenv").config();

  var sendgrid  = require("sendgrid")(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);

  // Locations listing #############################################################################
  api.get("/locations", function (req, res) {
    res.json({ locations: locations });
  })

  // Contact form ##################################################################################
  api.post("/contact", function (req, res) {

    // Compose email -----------------------------------------------------------
    var lastName = req.body.lastName,
        firstName = req.body.firstName,
        email = req.body.email,
        phone = req.body.phone,
        address = req.body.address,
        message = req.body.message,
        emailSenderName = "",
        emailSubject = "",
        emailBody = "";

    emailSenderName = firstName + " " + lastName;

    if (process.env.NODE_ENV === "development") {
      emailSubject = "[Local] Nouveau message de " + emailSenderName;
    }
    else {
      emailSubject = "Nouveau message de " + emailSenderName;
    }

    emailBody = "Prénom : " + firstName + "<br>";
    emailBody += "Nom : " + lastName + "<br>";
    emailBody += "Email : " + email + "<br>";

    if (phone) {
      emailBody += "Téléphone : " + phone + "<br>";
    }

    if (address) {
      emailBody += "<br>Adresse :<br>" + address + "<br>";
    }

    emailBody += "<br>Message :<br>" + message;

    // Send email --------------------------------------------------------------
    sendgrid.send({
      to:       "kevin@lanceplaine.com",
      from:     email,
      fromname: emailSenderName,
      subject:  emailSubject,
      text:     message,
      html:     emailBody
    }, function (err, json) {
      if (err) { return console.error(err); }
      console.log(json);
    });

    res.sendStatus(200);
  })

  module.exports = api;
})();
