import React from "react";
import "./app.css";

const HeaderImage = () => {
  return (
    <div className="header-image-container">
      <img
        className="header-image"
        alt="header"
        src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <div className="basics-textbox-container">
        <div className="basics-textbox-verticle-lines"></div>
        <div className="basics-textbox-header">
          EARLY ACCESS ONLY! FULL ROLLOUT EXPECTED BY APRIL 2021
        </div>

        <div className="basics-textbox">
          <h1>The Basics</h1>
          <h3>
            Selling a cash-covered put is actually a BULLISH strategy! Watch the basics of this
            under-appreciated INCOME strategy, used by the GOAT himself, Warren Buffett!
          </h3>
        </div>
        <div className="basics-textbox">
          <h1>What's the Catch?</h1>
          <h3>
            The optimal trade has a capped upside, unlike buying a speculative call option, we know
            our maximum profit the moment we have our order filled. Of course, if we are assigned
            our put, we then have unlimited upside potential.
          </h3>
        </div>
        <div className="basics-textbox">
          <h1>Why Us?</h1>
          <h3>
            Theputsguy is devoted to his craft, and has experience trading options for 20+ years. He
            honed his craft through the dot.com bubble, the financial meltdown of 2008 and the 2020
            Q1 pandemic crisis. Now with more people buying calls/puts than ever, it has never been
            a better time to start SELLING options!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HeaderImage;
