const { Category } = require('../models');

const addCategory = async (name) => {
  const addedCategory = await Category.create({ name });

  // console.log('ADDED', { id: addedCategory.null, name: addedCategory.dataValues.name });

  return { id: addedCategory.null, name: addedCategory.dataValues.name };
};

module.exports = addCategory;