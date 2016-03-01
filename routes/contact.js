var express = require("express");
var router = express.Router();

/* GET contact page. */
router.get("/", function(req, res, next) {
  res.render("contact", { seo_title: "Cap'Net Pressing | Contactez-nous" });
});

module.exports = router;
