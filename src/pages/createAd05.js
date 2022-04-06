import React from "react";
import ProgressCreateAd from "../components /ProgressCreateAd";
import CreateAdNextPrev from "../components /CreateAdNextPrev";
import CreateAdMenu from "../components /CreateAdMenu";
import RadioCheckbox from "../components /RadioCheckboxInput";
import SettingsIcon from "../Assets/Images/settings.svg";

import "./createAd.scss";

const CreateAd05 = () => {
  return (
    <div className="create-ad-page">
      <ProgressCreateAd nr="5" />
      <div className="grid-container">
        <CreateAdMenu />
        <div>
          <h2>Hyra och önskad hyresgäst</h2>
          <div className="">
            <h3>Hur mycket vill du hyra ut för?</h3>
            <input
              className="rent-input"
              type="text"
              placeholder="Skriv din hyra..."
            ></input>

            <h3>Hur många år vill du hyra ut?</h3>
            <div className="grid-container-5">
              <div className="grid-item">
                <RadioCheckbox lableText="1 år" type="checkbox" id="ett" />
              </div>
              <div className="grid-item">
                <RadioCheckbox lableText="2-3 år" type="checkbox" id="två" />
              </div>
              <div className="grid-item">
                <RadioCheckbox lableText="+3 år" type="checkbox" id="tre" />
              </div>
            </div>

            <h3>Önskemål på typ av hyresgäst?</h3>
            <div className="grid-container-5">
              <div className="grid-item">
                <RadioCheckbox
                  lableText="Student"
                  type="checkbox"
                  id="student"
                />
                <RadioCheckbox lableText="Familj" type="checkbox" id="familj" />
                <RadioCheckbox
                  lableText="Flytta in omgående"
                  type="checkbox"
                  id="snabb"
                />
              </div>
              <div className="grid-item">
                <RadioCheckbox
                  lableText="Ensamstående"
                  type="checkbox"
                  id="ensam"
                />
                <RadioCheckbox
                  lableText="Kollektiv"
                  type="checkbox"
                  id="kollektiv"
                />
                <RadioCheckbox
                  lableText="Kortidsgäst"
                  type="checkbox"
                  id="kort"
                />
              </div>
              <div className="grid-item">
                <RadioCheckbox lableText="Par" type="checkbox" id="par" />
                <RadioCheckbox
                  lableText="Småbarnsfamilj"
                  type="checkbox"
                  id="småbarn"
                />
                <RadioCheckbox
                  lableText="Långtidsgäst"
                  type="checkbox"
                  id="lång"
                />
              </div>
            </div>
            <h3>Djur tillåtet?</h3>
            <div className="grid-container-5">
              <div className="grid-item">
                <RadioCheckbox lableText="Ja" type="checkbox" id="ja" />
              </div>
              <div className="grid-item">
                <RadioCheckbox lableText="Nej" type="checkbox" id="nej" />
              </div>
              <div className="grid-item"></div>{" "}
            </div>

            <h3>Rökning tillåtet?</h3>
            <div className="grid-container-5">
              <div className="grid-item">
                <RadioCheckbox lableText="Ja" type="checkbox" id="rökja" />
              </div>
              <div className="grid-item">
                <RadioCheckbox lableText="Nej" type="checkbox" id="röknej" />
              </div>
              <div className="grid-item"></div>
            </div>
            <div className="flex-container">
              <h3>Behöver du hjälp med att hitta en hyresgäst?</h3>
              <img src={SettingsIcon} alt=""></img>
            </div>
            <div className="grid-container-5">
              <div className="grid-item">
                <RadioCheckbox lableText="Ja" type="checkbox" id="hittaja" />
              </div>
              <div className="grid-item">
                <RadioCheckbox lableText="Nej" type="checkbox" id="hittanej" />
              </div>
              <div className="grid-item"></div>{" "}
            </div>
          </div>
        </div>
      </div>
      <CreateAdNextPrev link="/create-ad6" text="Nästa" backTo="/create-ad4"/>
    </div>
  );
};

export default CreateAd05;
