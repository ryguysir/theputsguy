import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";

import "./app.css";
import Legal from "../legal/Legal";
import BlogEntry from "./BlogEntry";

const Blog = ({ setSelectedLink }) => {
  const [items, setItems] = useState({ record: { root: [] } });
  const fetchItems = async () => {
    const data = await fetch("https://api.jsonbin.io/v3/b/60bd26959fc30168f1c5813e", {
      method: "GET",
      headers: {
        "X-Master-Key": "$2b$10$TBFDFW8pqBYx5Hjx2VOiBuSJ/mt99xnn.L6OR3X7TJ2S7WcxvXCZO",
      },
    });

    const items = await data.json();
    setItems(items);
  };
  useEffect(() => {
    fetchItems();
    window.scroll(0, 0);
    setSelectedLink(1);
  }, [setSelectedLink]);
  return (
    <>
      <div className="blog-page">
        <div className="blog-container">
          {items?.record?.root.map((entry) => {
            return (
              <Fade top>
                <BlogEntry
                  imgSrc={entry.image}
                  key={entry.id}
                  id={entry.id}
                  title={entry.title}
                  date={entry.date}
                  body={entry.body}
                />
              </Fade>
            );
          })}
        </div>
      </div>

      <Legal />
    </>
  );
};

export default Blog;
