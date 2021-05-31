import React from "react";
import "./app.css";

import PricingTier from "./PricingTier";

const Pricing = () => {
  return (
    <div className="pricing-block">
      <div className="pricing-container">
        <h1>Pricing</h1>
        <div className="horizontal-line"></div>
        <PricingTier
          title={"GOLD TIER -$499/Month"}
          body={
            "Theputsguys private spreadsheet, displaying all trades in real-time and access to his exclusive watchlist 30-minute one-on-one Zoom, on a monthly basis, to go over your account. Instant email to Theputsguy for questions on our trades- (24hour maximum response time, very fast during market- hours"
          }
        />
        <PricingTier
          title={"Basic Tier. $399/month"}
          body={
            "Theputsguys private spreadsheet, displaying all trades in real-time One 30-minute one-on-one Zoom- redeemable anytime in the first 30-days of membership"
          }
        />
        <div className="paypal-temp">
          <img
            alt="paypal Temp"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/248px-PayPal.svg.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
