import React from "react";
import "./index.scss";
// import PropTypes from 'prop-types';

const Button = ({ handleClick, text }) => {
  return (
      //Handleclick ej definerad
    <button onClick={handleClick} className="btn">
      {text}
    </button>
  );
};

export default Button;
