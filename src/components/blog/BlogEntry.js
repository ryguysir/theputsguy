import React from "react";

const BlogEntry = ({ title, date, body }) => {
  return (
    <div className="blog-entry">
      <span>
        <h1>{title}</h1>
        <div className="horizontal-line"></div>
        <h2>{date}</h2>
        <h3>{body}</h3>
      </span>
      <i className="fas fa-chevron-down"></i>
    </div>
  );
};

export default BlogEntry;
