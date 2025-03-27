import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div className="input-group">
        <input
          type="email"
          className="input"
          id="Email"
          name="Email"
          placeholder="john@shopper.com"
          autocomplete="off"
        />
        <input className="button--submit" value="Subscribe" type="submit" />
      </div>
    </div>
  );
};

export default NewsLetter;
