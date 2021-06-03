import React from "react";
import { Link } from "react-router-dom";

const BlogEntry = ({ id, title, date, body }) => {
  return (
    <div className="blog-entry">
      <span>
        <h1>{title}</h1>
        <div className="horizontal-line"></div>
        <h2>{date}</h2>
        <h3>{body}</h3>
      </span>
      <Link to={`/blog/${id}`}>
        <i className="fas fa-chevron-down"></i>
      </Link>
    </div>
  );
};

export default BlogEntry;
