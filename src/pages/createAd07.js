import React from "react";
import ProgressCreateAd from "../components /ProgressCreateAd";
import CreateAdNextPrev from "../components /CreateAdNextPrev";
import CreateAdMenu from "../components /CreateAdMenu";

import "./createAd.scss";

const CreateAd07 = () => {
  return (
    <div className="create-ad-page">
      <ProgressCreateAd nr="7" />
      <div className="grid-container">
        <CreateAdMenu />
        <div>
          <h2>Förhadsgranska: Såhär ser din bostadsprofil ut</h2>
          <div className="input-container"></div>
        </div>
      </div>
      <CreateAdNextPrev 
      link="/create-ad8"
      text="Nästa"
      />
    </div>
  );
};

export default CreateAd07;
