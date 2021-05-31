import React from "react";
import "./app.css";

import Header from "../header/Header";
import HeaderImage from "../headerImage/HeaderImage";
import Legal from "../legal/Legal";
import Pricing from "../pricing/Pricing";

const AboutUs = () => {
  return (
    <div>
      <Header selected={"about"} />
      <HeaderImage />
      <Pricing />
      <Legal />
    </div>
  );
};

export default AboutUs;
