const express = require("express");

const db = require("./../public/javascripts/db");

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.get("/", (req, res) => {
  if (db.isLogined(req, res)) {
    res.redirect("/main/book");
  } else {
    res.redirect("/user/login");
  }
});

module.exports = router;