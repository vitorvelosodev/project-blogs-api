const { BlogPost, User, Category } = require('../models');

const getAll = async () => {
  const allPosts = BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
      { model: Category, as: 'categories' },
    ],
  });

  return allPosts;
};

module.exports = { getAll };