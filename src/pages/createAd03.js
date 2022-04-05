import React from "react";
import ProgressCreateAd from "../components /ProgressCreateAd";
import CreateAdNextPrev from "../components /CreateAdNextPrev";
import CreateAdMenu from "../components /CreateAdMenu";

import "./createAd.scss";

const CreateAd03 = () => {
  return (
    <div className="create-ad-page">
      <ProgressCreateAd nr="3" />
      <div className="grid-container">
        <CreateAdMenu />
        <div>
          <h2>Storlek och bekvämligheter</h2>
          <div className="input-container"></div>
        </div>
      </div>
      <CreateAdNextPrev 
      link="/create-ad4"
      text="Nästa"
      />
    </div>
  );
};

export default CreateAd03;
