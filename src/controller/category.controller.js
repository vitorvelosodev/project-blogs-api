const categoryServices = require('../services');

const addCategory = async (req, res) => {
  const { name } = req.body;

  const addedCategory = await categoryServices.addCategory(name);

  return res.status(201).json(addedCategory);
};

module.exports = { addCategory };