import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that allows businesses to showcase and sell their products or services to customers worldwide. It offers a seamless shopping experience with features like product catalogs, secure payment gateways, and easy checkout processes. Users can browse categories, compare prices, and read reviews before making a purchase. Many e-commerce websites also provide personalized recommendations, order tracking, and customer support for enhanced convenience.</p>
        <p>An e-commerce website is a digital marketplace that enables users to shop for products or services online from the comfort of their homes. It typically features intuitive navigation, detailed product descriptions, and high-quality images for an engaging shopping experience. </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
