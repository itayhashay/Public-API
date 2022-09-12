const express = require('express'),
  Category = require('../Models/category'),
  router = express.Router();

router.get('/', async (req, res) => {
  const category = await Category.find({});
  console.log(category);
  res.send({ data: category })
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const categiry = await Category.findById(id);
  res.send({ data: categiry })
})

router.post('/', async (req, res) => {
  const newCategory = new Category(req.body);
  await newCategory.save();
  res.send({ data: newCategory });
})

router.post('/:id', async (req, res) => {
  const { id } = req.params;
  const categiry = await Category.findByIdAndUpdate(id, req.body);
  await categiry.save();
  res.send({ data: categiry });
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const categiry = await Category.findByIdAndDelete(id);
  await categiry.save()
  res.send({ data: categiry });
})


module.exports = router;