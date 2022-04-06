import React from "react";
import ProgressCreateAd from "../components /ProgressCreateAd";
import CreateAdNextPrev from "../components /CreateAdNextPrev";
import CreateAdMenu from "../components /CreateAdMenu";

import "./createAd.scss";

const CreateAd08 = () => {
  return (
    <div className="create-ad-page">
      <ProgressCreateAd nr="8" />
      <div className="grid-container">
        <CreateAdMenu />
        <div>
          <h2>Du är klar!</h2>
          <div className="input-container"></div>
        </div>
      </div>
      <CreateAdNextPrev 
      link="/profile"
      text="Nästa"
      />
    </div>
  );
};

export default CreateAd08;
