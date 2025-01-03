import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import BlogForm from '../components/BlogForm';
import axios from 'axios';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const { data } = await axios.get('/api/blogs');
    setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">All Blogs</h1>
      <BlogForm refreshBlogs={fetchBlogs} />
      <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} title={blog.title} content={blog.content} author={blog.author.username} />
        ))}
      </div>
    </div>
  );
};

export default Home;
