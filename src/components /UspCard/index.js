import React from "react";
import "./uspCard.scss";

const UspCard = ({ uspImage, text, alt }) => {
  return (
    <div className="usp-card">
      <img src={uspImage} alt={alt}></img>
      <p>{text}</p>
    </div>
  );
};

export default UspCard;
