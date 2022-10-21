const express = require('express'),
  hash = require('object-hash'),
  User = require('../Models/user'),
  Bookmark = require('../Models/bookmark'),
  router = express.Router();

router.get('/', async (req, res) => {
  const users = await User.find({});
  for (let i = 0; i < users.length; i++) {
    delete users[i]['_doc']["password"];
  }
  res.send({ data: users });
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  delete user['_doc']["password"];
  res.send({ data: user })
})

router.get('/search', async (req, res) => {
  let { query } = req;
  const user = await User.find({ query });
  for (let i = 0; i < users.length; i++) {
    delete users[i]['_doc']["password"];
  }
  res.send({ data: user })
})

router.post('/', async (req, res) => {
  req.body.password = hash(req.body.password);
  const newUser = new User(req.body);
  await newUser.save();
  delete newUser['_doc']["password"];
  res.send({ data: newUser });
})

router.post('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndUpdate(id, req.body, { new: true });
  await user.save();
  delete user['_doc']["password"];
  res.send({ data: user });
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  await Bookmark.deleteMany({ userId: user._id });
  delete user['_doc']["password"];
  res.send({ data: user });
})

router.post('/login', async (req, res) => {
  const { username, password } = req.params;
  const user = await User.findOne({ username: username });
  res.send({ data: { loggedIn: password == user.password, userType: user.userType } });
})


module.exports = router;