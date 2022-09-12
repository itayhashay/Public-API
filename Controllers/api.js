
const express = require('express'),
  Api = require('../Models/api'),
  router = express.Router();

router.get('/', (req, res) => {
  res.send('api request');
})


module.exports = router;