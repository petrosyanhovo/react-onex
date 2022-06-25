import React from "react";
import "./button.css";

 const Button = ({ buttonName }) => {
  return (
    <button className="main-button" type="submit">
      {buttonName} <i className="fa fa-long-arrow-right"></i>
    </button>
  );
};

export default Button