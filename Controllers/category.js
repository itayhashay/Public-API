
const express = require('express'),
  Categiry = require('../Models/category'),
  router = express.Router();

router.get('/', (req, res) => {
  res.send('category request');
})


module.exports = router;