import React from "react";
import "./index.scss";
//import PropTypes from "prop-types";

const RadioCheckboxInput = ({ name, id, value, lableText, type, stylingClass}) => {
  return (
    <div className={stylingClass}>
      <div className="form">
        <section className="plan">
          <input
            className=""
            type={type}
            // name={name}
            id={id}
            // value={value}
          ></input>
          <label className="four" for={id}>
            {lableText}
          </label>
        </section>
      </div>
    </div>
  );
};

export default RadioCheckboxInput;
