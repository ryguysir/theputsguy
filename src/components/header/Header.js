import React from "react";
import "./app.css";

const Header = ({ selected }) => {
  return (
    <div className="header">
      <object
        className="main-logo"
        aria-labelledby="the puts guy logo"
        alt="the puts guy logo"
        data="./logos/theputsguyLogo.svg"
      ></object>

      <div className="header-bttn-holder">
        <div className={`header-bttn ${selected === "about" ? "header-bttn-toggled" : ""}`}>
          About Us
        </div>
        <div className={`header-bttn ${selected === "blog" ? "header-bttn-toggled" : ""}`}>
          Blog
        </div>
        <div className={`header-bttn ${selected === "faq" ? "header-bttn-toggled" : ""}`}>FAQ</div>
        <div className={`header-bttn ${selected === "contact" ? "header-bttn-toggled" : ""}`}>
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default Header;
