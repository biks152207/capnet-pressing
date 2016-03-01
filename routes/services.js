var express = require("express");
var router = express.Router();

/* GET services page. */
router.get("/", function(req, res, next) {
  res.render("services", { seo_title: "Cap'Net Pressing | Services" });
});

module.exports = router;
