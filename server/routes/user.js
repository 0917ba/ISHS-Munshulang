var express = require("express");
var router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

const db = require("../public/javascripts/db");

router.get("/login", (req, res) => {
  res.render("index", { isError: false, loginError: null });
});

router.post("/login", (req, res) => {
  db.tryLogin(req.body.id, req.body.password, (loginInfo) => {
    console.log(loginInfo);
    if (loginInfo.err == false) {
      req.session.is_logined = true;
      req.session.id = req.body.id;
      req.session.save(() => {
        res.redirect("/main/book");
      });
    } else {
      console.log(loginInfo.errMsg);
      res.render("index", { isError: true, loginError: loginInfo.errMsg });
    }
  });
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    res.redirect("/");
  });
});

module.exports = router;
