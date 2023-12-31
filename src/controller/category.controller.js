const { categoryServices } = require('../services');

const addCategory = async (req, res) => {
  const { name } = req.body;

  const addedCategory = await categoryServices.addCategory(name);

  return res.status(201).json(addedCategory);
};

const getAll = async (_req, res) => {
  const allCategories = await categoryServices.getAll();

  res.status(200).json(allCategories);
};

module.exports = { addCategory, getAll };