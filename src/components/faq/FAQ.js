import React, { useEffect } from "react";
import "./app.css";

const FAQ = ({ setSelectedLink }) => {
  useEffect(() => {
    setSelectedLink(2);
  });
  return (
    <div>
      <div className="faq-container">
        <span>FAQ</span>
      </div>
    </div>
  );
};

export default FAQ;
