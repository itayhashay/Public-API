const express = require('express'),
  Category = require('../Models/category'),
  Api = require('../Models/api'),
  Bookmark = require('../Models/bookmark'),
  router = express.Router();

router.get('/', async (req, res) => {
  const category = await Category.find({});
  console.log(category);
  res.send({ data: category })
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const category = await Category.findById(id);
  res.send({ data: category })
})

router.get('/search', async (req, res) => {
  let { query } = req;
  const category = await Category.find({ query });
  res.send({ data: category });
})

router.post('/', async (req, res) => {
  const newCategory = new Category(req.body);
  await newCategory.save();
  res.send({ data: newCategory });
})

router.post('/:id', async (req, res) => {
  const { id } = req.params;
  const category = await Category.findByIdAndUpdate(id, req.body, { new: true });
  await category.save();
  res.send({ data: category });
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const category = await Category.findByIdAndDelete(id);
  const apis = await Api.find({ categoryId: category._id });
  await Api.deleteMany({ categoryId: category._id });
  for (let api of apis) {
    await Bookmark.deleteMany({ apiId: api._id });
  }
  res.send({ data: category });
})


module.exports = router;