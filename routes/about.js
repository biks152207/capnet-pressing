var express = require("express");
var router = express.Router();

/* GET about page. */
router.get("/", function(req, res, next) {
  res.render("about", { seo_title: "Cap'Net Pressing | À propos" });
});

module.exports = router;
