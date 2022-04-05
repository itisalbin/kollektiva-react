import React from "react";
import "./index.scss";

const LgInput = ({ name, id, value, lableText, type }) => {
  return (
    <div className="lg-input">
      <div className="form">
        <section className="plan">
          <input
            className=""
            type={type}
            name={name}
            id={id}
            value={value}
          ></input>
          <label className="four" for={id}>
            {lableText}
          </label>
        </section>
      </div>
    </div>
  );
};

export default LgInput;
