const express = require('express'),
  User = require('../Models/user'),
  Bookmark = require('../Models/bookmark'),
  router = express.Router();

router.get('/', async (req, res) => {
  const users = await User.find({});
  res.send({ data: users })
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.send({ data: user })
})

router.get('/search', async (req, res) => {
  let { query } = req;
  const user = await User.find({ query });
  res.send({ data: user })
})

router.post('/', async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.send({ data: newUser });
})

router.post('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndUpdate(id, req.body, { new: true });
  await user.save();
  res.send({ data: user });
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  const bookmark = await Bookmark.deleteMany({ userId: user._id });
  res.send({ data: user });
})

router.post('/login', async (req, res) => {
  const { username, password } = req.params;
  const user = await User.findOne({ username: username });
  res.send({ data: { loggedIn: password == user.password, userType: user.userType } });
})


module.exports = router;