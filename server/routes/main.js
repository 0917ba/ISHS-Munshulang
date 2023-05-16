var express = require("express");
var router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

const db = require("../public/javascripts/db");

router.get("/", (req, res) => {
  res.redirect("/main/book");
});

router.get("/book", (req, res) => {
  res.send("book page");
});

router.get("/book", (req, res) => {});

module.exports = router;
