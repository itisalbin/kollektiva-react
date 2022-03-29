import React from "react";
import "./button.scss";
// import PropTypes from 'prop-types';

const Button = ({handleClick, backgroundColor, text }) => {
    return (
        <button onClick={handleClick} className="btn" style={{backgroundColor:backgroundColor}} >{text}</button>
    );
};

export default Button;