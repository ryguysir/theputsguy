import React from "react";
import "./app.css";

const Header = () => {
  return (
    <div className="header">
      <object
        className="main-logo"
        aria-labelledby="the puts guy logo"
        alt="the puts guy logo"
        data="./logos/theputsguyLogo.svg"
      ></object>

      <div className="header-bttn-holder">
        <div className="header-bttn">About Us</div>
        <div className="header-bttn">Blog</div>
        <div className="header-bttn">FAQ</div>
        <div className="header-bttn">Contact Us</div>
      </div>
    </div>
  );
};

export default Header;
