const express = require('express'),
  Bookmark = require('../Models/bookmark'),
  User = require('../Models/user'),
  Api = require('../Models/api'),
  router = express.Router();

router.get('/', async (req, res) => {
  const bookmarks = await Bookmark.find({});
  let data = [];
  for (let i = 0; i < bookmarks.length; i++)
    data[i] = await bookmarkParser(bookmarks[i]);
  res.send({ data })
})

router.get('/:userId/search', async (req, res) => {
  const userId = req.params.userId;
  let { q } = req.query;
  const bookmarks = await Bookmark.find({ userId: userId });
  let data = [];
  for (let i = 0; i < bookmarks.length; i++)
    data[i] = await bookmarkParser(bookmarks[i]);
  for (let i = 0; i < data.length; i++) {
    let found = false;
    let keys = Object.keys(data[i].api['_doc']);
    for (let j = 0; j < keys.length && !found; j++) {
      if (String(data[i].api[keys[j]]).includes(q))
        found = true;
    }
    if (!found) {
      delete data[i];
    }
  }
  const searchResult = data.filter(element => {
    return element !== null;
  });
  res.send({ data: searchResult });
})

router.get('/user/:userId', async (req, res) => {
  const userId = req.params.userId;
  const bookmarks = await Bookmark.find({ userId: userId });
  let data = []
  for (let i = 0; i < bookmarks.length; i++)
    data[i] = await bookmarkParser(bookmarks[i]);
  res.send({ data });
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const bookmark = await Bookmark.findById(id);
  res.send({ data: await bookmarkParser(bookmark) })
})

router.post('/', async (req, res) => {
  let username = req.cookies.username ? req.cookies.username : "itayhashay";
  const user = await User.find({ username: username });
  let bookmark;
  const currentBookmarks = await Bookmark.find({ userId: user[0]._id, apiId: req.body.apiId });
  if (currentBookmarks.length) {
    bookmark = await Bookmark.findByIdAndDelete(currentBookmarks[0]._id);
  } else {
    let data = {
      userId: user[0]._id,
      apiId: req.body.apiId
    }
    bookmark = new Bookmark(data);
    await bookmark.save();
  }
  res.send({ data: bookmark });
})

router.put('/:id', async (req, res) => {
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

const bookmarkParser = async (bookmark) => {
  let user, api;
  user = await User.findById(bookmark.userId)
  delete user['_doc']["password"];
  api = await Api.findById(bookmark.apiId)
  return {
    "id": bookmark.id,
    "user": user,
    "api": api
  }
}

module.exports = router;