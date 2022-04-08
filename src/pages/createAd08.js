import React from "react";
import ProgressCreateAd from "../components /ProgressCreateAd";
import CreateAdNextPrev from "../components /CreateAdNextPrev";
import CreateAdMenu from "../components /CreateAdMenu";

import "./createAd.scss";

const CreateAd08 = () => {
  return (
    <div className="create-ad-page">
      <ProgressCreateAd nr="8" />
      <div className="main-container8">
          <h2>Du är klar!</h2>
          <div className="done-circle"></div>
      </div>
      <CreateAdNextPrev 
      link="/profile"
      text="Gå till profil"
      backTo="/create-ad7"
      />
    </div>
  );
};

export default CreateAd08;
