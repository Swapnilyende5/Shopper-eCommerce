import React from "react";
import { Link } from "react-router-dom";
import "./MainButton.css";

const MainButton = ({ btnTitle,handleExplore, isHomeButton = false }) => {
  return !isHomeButton ? (
    <button className="newBtn">
      <Link to="/latest-collections">
        <span>{btnTitle}</span>
      </Link>
    </button>
  ) : (
    <button className="newBtn" onClick={handleExplore}>
      <span>{btnTitle}</span>
    </button>
  );
};

export default MainButton;
