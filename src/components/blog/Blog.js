import React, { useEffect } from "react";

import "./app.css";
import BlogEntry from "./BlogEntry";
import Legal from "../legal/Legal";

const Blog = ({ setSelectedLink }) => {
  const blogData = require("./blogData.js");

  useEffect(() => {
    window.scroll(0, 0);
    setSelectedLink(1);
  });
  return (
    <>
      <div className="blog-page">
        <div className="blog-container">
          {blogData.default.map((entry) => {
            return (
              <BlogEntry
                key={entry.id}
                id={entry.id}
                title={entry.title}
                date={entry.date}
                body={entry.body}
              />
            );
          })}
        </div>
      </div>
      <Legal />
    </>
  );
};

export default Blog;
