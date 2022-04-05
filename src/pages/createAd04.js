import React from "react";
import ProgressCreateAd from "../components /ProgressCreateAd";
import CreateAdNextPrev from "../components /CreateAdNextPrev";
import CreateAdMenu from "../components /CreateAdMenu";

import "./createAd.scss";

const CreateAd04 = () => {
  return (
    <div className="create-ad-page">
      <ProgressCreateAd nr="4" />
      <div className="grid-container">
        <CreateAdMenu />
        <div>
          <h2>Område och adress</h2>
          <div className="input-container"></div>
        </div>
      </div>
      <CreateAdNextPrev 
      link="/create-ad5"
      text="Nästa"
      />
    </div>
  );
};

export default CreateAd04;
