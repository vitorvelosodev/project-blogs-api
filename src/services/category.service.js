const { Category } = require('../models');

const addCategory = async (name) => {
  const addedCategory = await Category.create({ name });

  return { id: addedCategory.null, name: addedCategory.dataValues.name };
};

const getAll = async () => {
  const allCategories = await Category.findAll();

  return allCategories;
};

module.exports = { addCategory, getAll };