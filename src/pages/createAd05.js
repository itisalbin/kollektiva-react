import React from "react";
import ProgressCreateAd from "../components /ProgressCreateAd";
import CreateAdNextPrev from "../components /CreateAdNextPrev";
import CreateAdMenu from "../components /CreateAdMenu";

import "./createAd.scss";

const CreateAd05 = () => {
  return (
    <div className="create-ad-page">
      <ProgressCreateAd nr="5" />
      <div className="grid-container">
        <CreateAdMenu />
        <div>
          <h2>Hyra och önskad hyresgäst</h2>
          <div className="input-container"></div>
        </div>
      </div>
      <CreateAdNextPrev 
      link="/create-ad6"
      text="Nästa"
      />
    </div>
  );
};

export default CreateAd05;
