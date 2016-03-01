var express = require("express");
var router = express.Router();

/* GET location page. */
router.get("/", function(req, res, next) {
  res.render("location", { seo_title: "Cap'Net Pressing | Nous situer" });
});

module.exports = router;
