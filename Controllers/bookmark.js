const express = require('express'),
  Bookmark = require('../Models/bookmark'),
  router = express.Router();

router.get('/', async (req, res) => {
  const bookmarks = await Bookmark.find({});
  console.log(bookmarks);
  res.send({ data: bookmarks })
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const bookmark = await Bookmark.findById(id);
  res.send({ data: bookmark })
})

router.get('/search', async (req, res) => {
  let { query } = req;
  const bookmark = await Bookmark.find({ query });
  res.send({ data: bookmark });
})

router.post('/', async (req, res) => {
  const newBookmark = new Bookmark(req.body);
  await newBookmark.save();
  res.send({ data: newBookmark });
})

router.post('/:id', async (req, res) => {
  const { id } = req.params;
  const bookmark = await Bookmark.findByIdAndUpdate(id, req.body, { new: true });
  await bookmark.save();
  res.send({ data: bookmark });
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const bookmark = await Bookmark.findByIdAndDelete(id);
  res.send({ data: bookmark });
})

module.exports = router;