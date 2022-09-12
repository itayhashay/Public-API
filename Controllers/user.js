const express = require('express'),
  User = require('../Models/user'),
  router = express.Router();

router.get('/', async (req, res) => {
  const users = await User.find({});
  console.log(users);
  res.send({ data: users })
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.send({ data: user })
})

router.post('/', async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.send({ data: newUser });
})

router.post('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndUpdate(id, req.body);
  await user.save();
  res.send({ data: user });
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  await user.save()
  res.send({ data: user });
})

module.exports = router;