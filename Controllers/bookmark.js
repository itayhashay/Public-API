
const express = require('express'),
  Bookmark = require('../Models/bookmark'),
  router = express.Router();

router.get('/', (req, res) => {
  res.send('bookmark request');
})

module.exports = router;