import React from 'react';

const BlogCard = ({ title, content, author }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700 mt-2">{content}</p>
      <p className="text-sm text-gray-500 mt-4">By: {author}</p>
    </div>
  );
};

export default BlogCard;
