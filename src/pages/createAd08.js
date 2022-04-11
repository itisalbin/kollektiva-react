import React from "react";
import ProgressCreateAd from "../components /ProgressCreateAd";
import CreateAdNextPrev from "../components /CreateAdNextPrev";
import { AiOutlineCheck } from "react-icons/ai";

import "./createAd.scss";
import "./createAd8.scss";

const CreateAd08 = () => {
  return (
    <div className="create-ad-page">
      <ProgressCreateAd nr="8" />
      <div className="main-container8">
        <h2>Du är klar!</h2>
        <div className="done-circle">
          <AiOutlineCheck className="check-icon" size="280px" />
        </div>
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
