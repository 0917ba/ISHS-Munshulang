const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended : false}));

router.get('/', (req, res) => {
  console.log("Hello, ISHS!");
  res.send('Hello, ISHS!');
});

module.exports = router;