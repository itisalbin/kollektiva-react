import React from "react";
import LgInput from "../components /LgInput";
import ProgressCreateAd from "../components /ProgressCreateAd";
import CreateAdNextPrev from "../components /CreateAdNextPrev";
import CreateAdMenu from "../components /CreateAdMenu";

import "./createAd.scss";

const CreateAd01 = () => {
  return (
    <div className="create-ad-page">
      <ProgressCreateAd nr="1" />
      <div className="grid-container">
        <CreateAdMenu />
        <div>
          <h2>Hyresvärd/Hyresgäst</h2>
          <h3>Vem är du?</h3>
          <div className="input-container">
            <LgInput
              type="radio"
              name="villa"
              id="villa"
              value="villa"
              lableText="VILLA"
            />
            <LgInput
              type="radio"
              name="hus"
              id="hus"
              value="hus"
              lableText="HUUUSSS"
            />
          </div>
          <h5>Gör ditt val och tryck på "Nästa"</h5>
        </div>
      </div>
      <CreateAdNextPrev />
    </div>
  );
};

export default CreateAd01;
