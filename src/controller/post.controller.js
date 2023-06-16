const { postServices } = require('../services');

const getAll = async (_req, res) => {
  const allCourses = await postServices.getAll();

  res.status(200).json(allCourses);
};

module.exports = { getAll };