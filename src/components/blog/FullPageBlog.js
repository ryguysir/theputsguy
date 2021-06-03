import React, { useEffect } from "react";

const FullPageBlog = ({ match }) => {
  const blogData = require("./blogData.js");
  let thisBlogData = blogData.default.filter((entry) => {
    return entry.id === match.params.id;
  });
  console.log(thisBlogData);
  useEffect(() => {});
  return (
    <div>
      <div className="full-page-blog-container">{thisBlogData[0].title}</div>
    </div>
  );
};

export default FullPageBlog;
