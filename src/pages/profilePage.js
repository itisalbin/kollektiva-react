import React from "react";
import ClientPreviewCard from "../components /ClientPreviewCard";
import ProfileMenuItem from "../components /ProfileMenuItem";
import ContactCard from "../components /ContactCard";
import MessageIcon from "../Assets/Images/messages.svg";
import FamilyIcon from "../Assets/Images/family.svg";
import HouseIcon from "../Assets/Images/house.svg";
import SettingsIcon from "../Assets/Images/settings.svg";
import ProfileCard from "../components /ProfileCard";
import CreateAdNextPrev from "../components /CreateAdNextPrev";
import "./profile-page.scss";
import ProgressCreateAd from "../components /ProgressCreateAd";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <ProgressCreateAd nr="9" />
      <div className="container">
        <div className="menu-container">
          <p>Meny</p>
          <ProfileMenuItem itemIcon={HouseIcon} text="Mina annonser" />
          <ProfileMenuItem itemIcon={FamilyIcon} text="Hyresgäster" />
          <ProfileMenuItem itemIcon={MessageIcon} text="Meddelanden" />
          <ProfileMenuItem itemIcon={SettingsIcon} text="Inställningar" />
          <ContactCard
            textOne="Kontakta din handläggare:"
            textTwo="Sahar Eriksson"
          />
        </div>
        <div className="content-container">
          <div className="flex-container">
            <div className="profile-container">
              <ProfileCard />
            </div>
            <div className="add-container">
              <h5 className="headline">Hej Göran!</h5>
              <p className="welcome-paragraph">
                Nu har du laddat upp din bostadsannons. Nästa steg är att hitta
                en bra hyresgäst för dig!
              </p>
              <ClientPreviewCard
                topText="Gå till din annons"
                cardHeadline="Detta är en rubrik"
                cardDecptiption="Här står ngt..."
                rent="15.000"
              />
            </div>
          </div>
          <h3>Här ser du dina hyresgäster som Kollektiva matchat till dig:</h3>
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
<CreateAdNextPrev
text="Ändra"
/>
    </div>
  );
};

export default ProfilePage;
