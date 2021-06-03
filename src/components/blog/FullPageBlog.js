import React from "react";
import Legal from "../legal/Legal";

const FullPageBlog = ({ match }) => {
  const blogData = require("./blogData.js");
  let curBlogData = blogData.default.filter((item) => {
    return item.id === match.params.id;
  });
  return (
    <>
      <div className="full-blog-page">
        <div className="full-page-blog-container">
          <h1>{curBlogData[0].title}</h1>
          <h2>{curBlogData[0].date}</h2>
          <div className="full-page-blog-container-image">
            <img alt="" src={curBlogData[0].image} />
          </div>
          <h3>{curBlogData[0].body}</h3>
        </div>
      </div>
      <Legal />
    </>
  );
};

export default FullPageBlog;
