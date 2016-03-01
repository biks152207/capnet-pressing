var express = require("express");
var router = express.Router();

/* GET legal page. */
router.get("/", function(req, res, next) {
  res.render("legal", { seo_title: "Cap'Net Pressing | Mentions légales" });
});

module.exports = router;
