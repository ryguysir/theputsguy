import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Legal from "../legal/Legal";
import { FacebookShareButton, TwitterShareButton } from "react-share";

const FullPageBlog = ({ setSelectedLink, match }) => {
  const [items, setItems] = useState({
    image: "",
    id: "",
    title: "",
    date: "",
    body: "",
  });
  const fetchItems = async () => {
    const data = await fetch("https://api.jsonbin.io/v3/b/60bc11a492164b68bec13b15", {
      method: "GET",
      headers: {
        "X-Master-Key": "$2b$10$TBFDFW8pqBYx5Hjx2VOiBuSJ/mt99xnn.L6OR3X7TJ2S7WcxvXCZO",
      },
    });

    const items = await data.json();
    setItems(items?.record?.root.filter((item) => item.id === match.params.id));
  };
  useEffect(() => {
    fetchItems();
    window.scroll(0, 0);
    setSelectedLink(1);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSelectedLink]);
  return (
    <>
      <div className="full-blog-page">
        <div className="full-page-blog-container">
          <Link to="/blog" className="full-page-blog-container-return-bttn">
            <i className="fas fa-chevron-left"></i>&nbsp;&nbsp;Return
          </Link>
          <h1>{items[0]?.title}</h1>
          <h2>{items[0]?.date}</h2>
          <div className="full-page-blog-container-image">
            <img alt="" src={items[0]?.image} />
          </div>
          <h3>{items[0]?.body}</h3>
          <FacebookShareButton children={match.url} />
          <TwitterShareButton children={match.url} />
        </div>
      </div>
      <Legal />
    </>
  );
};

export default FullPageBlog;
