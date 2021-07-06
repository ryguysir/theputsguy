import React from "react";
import "./app.css";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Paypal = () => {
  return (
    <div className="paypal-container">
      <div className="paypal">
        <PayPalScriptProvider
          options={{
            "client-id":
              "AZ7vXecQWn8cWefPUUzZtkGw0mCBcy7LyiGUp3hQp3PF3NnjckBR933mB-NBVxSZ4U2OGvg9S-VNjk3a",
          }}
        >
          <PayPalButtons
            style={{
              shape: "rect",
              color: "blue",
              layout: "vertical",
              label: "subscribe",
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default Paypal;
