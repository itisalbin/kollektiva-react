import React from "react";
import LgInput from "../components /LgInput";
import ProgressCreateAd from "../components /ProgressCreateAd";
import CreateAdNextPrev from "../components /CreateAdNextPrev";
import CreateAdMenu from "../components /CreateAdMenu";
import { BsHouseDoorFill } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";

import "./createAd.scss";

const CreateAd01 = () => {
  return (
    <div className="create-ad-page">
      <ProgressCreateAd nr="1" />
      <div className="grid-container">
        <CreateAdMenu index="0" />
        <div className="main-container">
          <h2>Hyresvärd/Hyresgäst</h2>
          <h3>Vem är du?</h3>
          <div className="input-container">
            <LgInput
              type="checkbox"
              name="Hyresvärd"
              id="Hyresvärd"
              value="Hyresvärd"
              title="Hyresvärd"
              icon={<BsHouseDoorFill className="lg-icon" size="100px"/>}
            />
            <LgInput
              type="checkbox"
              name="hus"
              id="hus"
              value="hus"
              title="Hyresgäst"

              icon={<BsPeople className="lg-icon" size="107px" />}
            />
          </div>
          <h5>Gör ditt val och tryck på "Nästa"</h5>
        </div>
      </div>
      <CreateAdNextPrev link="/create-ad2" text="Nästa" backTo="/" />
    </div>
  );
};

export default CreateAd01;
