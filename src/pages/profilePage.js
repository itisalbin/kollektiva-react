import React from "react";
import ClientPreviewCard from "../components /ClientPreviewCard";
import NumbersOnProfile from "../components /NumbersOnProfile";
import ProfileMenuItem from "../components /ProfileMenuItem";
import ContactCard from "../components /ContactCard";
import MessageIcon from "../Assets/Images/messages.svg";
import FamilyIcon from "../Assets/Images/family.svg";
import HouseIcon from "../Assets/Images/house.svg";
import SettingsIcon from "../Assets/Images/settings.svg";

import "./profile-page.scss";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="container">
        <div className="menu-container">
          <p>Meny</p>
          <ProfileMenuItem itemIcon={HouseIcon} text="Mina annonser" />
          <ProfileMenuItem itemIcon={FamilyIcon} text="Hyresgäster" />
          <ProfileMenuItem itemIcon={MessageIcon} text="Meddelanden" />
          <ProfileMenuItem itemIcon={SettingsIcon} text="Inställningar" />
          <ContactCard 
          textOne="Kontakat din handläggare"
          textTwo="Erik Eriksson"
          />
        </div>
        <div className="content-container">
          <h5 className="headline">Hej Göran</h5>
          <p className="welcome-paragraph">
            Nu har du laddat upp din bostadsannons. Nästa steg är att hitta en
            bra hyresgäst för dig!
          </p>
          <div className="flex-container">
            <div>
              <NumbersOnProfile number="1" text="Du har en annons ute" />
              <NumbersOnProfile number="5" text="Du har fem nya meddelanden" />
              <NumbersOnProfile
                number="4"
                text="Du har fyra matchningar som Kollektiva tror passar dig."
              />
            </div>
            <div>
              <ClientPreviewCard
                topText="Gå till din annons"
                cardHeadline="Detta är en rubrik"
                cardDecptiption="Här står ngt..."
                rent="15.000"
              />
            </div>
          </div>
          <h5>Dina hyresgäst matchningar:</h5>
          <div className="client-card-container">
            <ClientPreviewCard
              className="client-preview-card"
              topText="Läs mer om Erik"
              cardHeadline="Detta är en rubrik"
              cardDecptiption="Här står ngt om mig"
              rent="15.000"
            />
            <ClientPreviewCard
              className="client-preview-card"
              topText="Läs mer om Erik"
              cardHeadline="Detta är en rubrik"
              cardDecptiption="Här står ngt om mig"
              rent="15.000"
            />
            <ClientPreviewCard
              className="client-preview-card"
              topText="Läs mer om Erik"
              cardHeadline="Detta är en rubrik"
              cardDecptiption="Här står ngt om mig"
              rent="15.000"
            />
            <ClientPreviewCard
              className="client-preview-card"
              topText="Läs mer om Erik"
              cardHeadline="Detta är en rubrik"
              cardDecptiption="Här står ngt om mig"
              rent="15.000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
