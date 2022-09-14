const express = require('express'),
  Api = require('../Models/api'),
  Bookmark = require('../Models/bookmark'),
  router = express.Router();

router.get('/', async (req, res) => {
  const apis = await Api.find({});
  console.log(apis);
  res.send({ data: apis })
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const api = await Api.findById(id);
  res.send({ data: api })
})

router.post('/', async (req, res) => {
  const newApi = new Api(req.body);
  await newApi.save();
  res.send({ data: newApi });
})

router.post('/:id', async (req, res) => {
  const { id } = req.params;
  const api = await Api.findByIdAndUpdate(id, req.body, { new: true });
  await api.save();
  res.send({ data: api });
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const api = await Api.findByIdAndDelete(id);
  const bookmark = await Bookmark.deleteMany({ apiId: api._id });
  res.send({ data: api });
})

module.exports = router;