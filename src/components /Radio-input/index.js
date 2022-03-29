import React from "react";
import "./radio-input.scss";
import PropTypes from "prop-types";

const RadioInput = ({ name, id, value, lableText }) => {
  return (
    <div>
      <input
        className=""
        type="radio"
        name={name}
        id={id}
        value={value}
      ></input>
      <label className="" for={id}>
        {lableText}
      </label>
    </div>
  );
};

export default RadioInput;
