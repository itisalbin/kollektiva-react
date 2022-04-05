import React from "react";
import "./index.scss";
//import PropTypes from "prop-types";

const TextInput = ({ name, id, value, lableText, placeholder }) => {
  return (
    <div className="text-input">
      <label className="" for={id}>
        {lableText}
      </label>
      <input className="" type="text" name={name} id={id} placeholder={placeholder}></input>
    </div>
  );
};

export default TextInput;
