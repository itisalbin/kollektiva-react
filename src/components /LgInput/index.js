import React from "react";
import "./index.scss";


const LgInput = ({ name, id, value, icon, type, title }) => {
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
            {icon}
          </label>
        </section>
      </div>
      <h5>{title}</h5>
    </div>
  );
};

export default LgInput;
