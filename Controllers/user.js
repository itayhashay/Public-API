
const express = require('express'),
  User = require('../Models/user'),
  router = express.Router();

router.get('/', (req, res) => {
  res.send('user request');
})

module.exports = router;