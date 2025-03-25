import React from "react";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="hero-left-new_heading">
          <div className="hero-hand-icon">
            <p>
              new <img src={hand_icon} alt="" /> <br /> collections for everyone
            </p>
          </div>
        </div>
        <div className="hero-latest-btn">
          <p>Latest Collections</p>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
