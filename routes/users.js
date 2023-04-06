var express = require('express');
var router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended : false}));


const db = require('./../database/db');


router.get('/login', (req, res) => {
  res.render('index', {'isError':false, 'loginError':null});
});

router.post("/login", (req, res) => {
  db.tryLogin(req.body.id, req.body.password, (loginInfo) => {
    console.log(loginInfo);
    if (loginInfo.err == false) {
      res.redirect('/');
    } else {
      console.log(loginInfo.errMsg);
      res.render('index', {'isError':true, 'loginError':loginInfo.errMsg});
    }
  });
});

module.exports = router;
