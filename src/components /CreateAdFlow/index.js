import React from "react";
import Button from "../Button";
import "./createAdFlow.scss";

const CreateAdFlow = () => {
  return (
    <div className="count-container">
      <div className="page">
        <div className="page-content"></div>
        <div className="nav-buttons-container">
          <Button text="Nästa" />
        </div>
      </div>

      <div className="page">
        <div className="page-content"></div>
        <div className="nav-buttons-container">
          <Button text="Nästa" />
          <Button text="Tillbaka" />
        </div>
      </div>

      <div className="page">
        <div className="page-content"></div>
        <div className="nav-buttons-container">
          <Button text="Nästa" />
          <Button text="Tillbaka" />
        </div>
      </div>
    </div>
  );
};

export default CreateAdFlow;
