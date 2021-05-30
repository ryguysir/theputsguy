import React from "react";
import "./app.css";

import PricingTier from "./PricingTier";

const Pricing = () => {
  return (
    <div className="pricing-block">
      <div className="pricing-container">
        <h1>Pricing</h1>
        <div className="horizontal-line"></div>
        <PricingTier />
        <PricingTier />
      </div>
    </div>
  );
};

export default Pricing;
