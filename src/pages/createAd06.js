import React from "react";
import ProgressCreateAd from "../components /ProgressCreateAd";
import CreateAdNextPrev from "../components /CreateAdNextPrev";
import CreateAdMenu from "../components /CreateAdMenu";

import "./createAd.scss";

const CreateAd06 = () => {
  return (
    <div className="create-ad-page">
      <ProgressCreateAd nr="6" />
      <div className="grid-container">
        <CreateAdMenu />
        <div>
          <h2>Din profil: Ladda upp din bostad</h2>
          <div className="input-container"></div>
        </div>
      </div>
      <CreateAdNextPrev 
      link="/create-ad7"
      text="Nästa"
      />
    </div>
  );
};

export default CreateAd06;
