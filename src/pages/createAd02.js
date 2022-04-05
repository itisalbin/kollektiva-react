import React from "react";
import ProgressCreateAd from "../components /ProgressCreateAd";
import CreateAdNextPrev from "../components /CreateAdNextPrev";
import CreateAdMenu from "../components /CreateAdMenu";

import "./createAd.scss";

const CreateAd02 = () => {
  return (
    <div className="create-ad-page">
      <ProgressCreateAd nr="2" />
      <div className="grid-container">
        <CreateAdMenu />
        <div>
          <h2>Basinformation om boende</h2>
          <div className="input-container"></div>
          <h5>Gör ditt val och tryck på "Nästa"</h5>
        </div>
      </div>
      <CreateAdNextPrev 
      link="/create-ad3"
      text="Nästa"
      />
    </div>
  );
};

export default CreateAd02;
