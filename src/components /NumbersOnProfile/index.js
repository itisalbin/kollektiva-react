import React from "react";
import "./numbersOnProfile.scss";

//import PropTypes from "prop-types";

const NumbersOnProfile = ({ number, text }) => {
  return (
    <div className="number-item">
      <div className="circle">
        <p>{number}</p>
      </div>
      <div className="text-info">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default NumbersOnProfile;
