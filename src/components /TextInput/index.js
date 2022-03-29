import React from "react";
import "./index.scss";
//import PropTypes from "prop-types";

const TextInput = ({ name, id, value, lableText }) => {
  return (
    <div>
      <label className="" for={id}>
        {lableText}
      </label>
      <input className="" type="text" name={name} id={id}></input>
    </div>
  );
};

export default TextInput;
