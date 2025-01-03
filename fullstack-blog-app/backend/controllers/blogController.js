const Blog = require('../models/Blog');

exports.getBlogs = async (req, res) => {
  const blogs = await Blog.find().populate('author', 'username');
  res.json(blogs);
};

exports.createBlog = async (req, res) => {
  const { title, content } = req.body;
  const blog = await Blog.create({ title, content, author: req.user.id });
  res.status(201).json(blog);
};
