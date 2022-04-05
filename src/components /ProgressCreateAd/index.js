import React from "react";
import "./ProgressCreateAd.scss";

const ProgressCreateAd = ({ nr }) => {
  return (
    <div className="progress-create-ad">
        <p>Steg {nr} av 9</p>
    </div>
  );
};

export default ProgressCreateAd;