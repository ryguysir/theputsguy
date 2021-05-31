import React, { useEffect } from "react";
import "./app.css";

const Blog = ({ setSelectedLink }) => {
  useEffect(() => {
    setSelectedLink(1);
  });
  return (
    <div>
      <div className="blog-container">
        <span>Blog</span>
      </div>
    </div>
  );
};

export default Blog;
