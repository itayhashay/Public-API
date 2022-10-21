const express = require('express'),
  Api = require('../Models/api'),
  Bookmark = require('../Models/bookmark'),
  router = express.Router();

router.get('/', async (req, res) => {
  const apis = await Api.find({});
  console.log(apis);
  res.send({ data: apis })
})

router.get('/search', async (req, res) => {
  let { q } = req.query;
  const api = await Api.find({
    $or: [{ name: { $regex: q, $options: 'i' } }, { description: { $regex: q, $options: 'i' } }, { url: { $regex: q, $options: 'i' } }, { category: { $regex: q, $options: 'i' } }]
  });
  res.send({ data: api });
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const api = await Api.findById(id);
  res.send({ data: api == null ? [] : api })
})

router.post('/', async (req, res) => {
  // const category = await Category.findOne({ name: req.body.category })
  // req.body.category = category.name;
  const newApi = new Api(req.body);
  await newApi.save();
  res.send({ data: newApi });
})

router.post('/upvote/:id', async (req, res) => {
  const { id } = req.params;
  let api = await Api.findById(id);
  api.upvote++;
  api = await Api.findByIdAndUpdate(id, api, { new: true });
  api.save();
  res.send({ data: api })
})

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const api = await Api.findByIdAndUpdate(id, req.body, { new: true });
  await api.save();
  res.send({ data: api });
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const api = await Api.findByIdAndDelete(id);
  await Bookmark.deleteMany({ apiId: api._id });
  res.send({ data: api });
})

module.exports = router;