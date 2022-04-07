import React from "react";
import ProgressCreateAd from "../components /ProgressCreateAd";
import CreateAdNextPrev from "../components /CreateAdNextPrev";
import CreateAdMenu from "../components /CreateAdMenu";
import ProfileCard from "../components /ProfileCard";

import "./createAd.scss";

const CreateAd06 = () => {
  return (
    <div className="create-ad-page">
      <ProgressCreateAd nr="6" />
      <div className="grid-container">
        <CreateAdMenu />
        <div className="main-container6">
          <h2>Din profil: Ladda upp din bostad</h2>
          <div className="input-container"></div>
          <ProfileCard alt="Profilbild" />
        </div>
      </div>
      <CreateAdNextPrev link="/create-ad7" text="Nästa" backTo="/create-ad5" />
    </div>
  );
};

export default CreateAd06;
