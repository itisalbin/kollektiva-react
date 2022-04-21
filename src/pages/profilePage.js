import React from "react";
import ClientPreviewCard from "../components /ClientPreviewCard";
import ProfileMenuItem from "../components /ProfileMenuItem";
import ContactCard from "../components /ContactCard";
import MessageIcon from "../Assets/Images/messages.svg";
import FamilyIcon from "../Assets/Images/family.svg";
import HouseIcon from "../Assets/Images/house.svg";
import Couple from "../Assets/Images/couple.webp";
import DadGirl from "../Assets/Images/dad_girl.webp";
import MotherIpad from "../Assets/Images/mother_ipad.webp";
import SettingsIcon from "../Assets/Images/settings.svg";
import ProfileCard from "../components /ProfileCard";
import CreateAdNextPrev from "../components /CreateAdNextPrev";
import "./profile-page.scss";
import ProgressCreateAd from "../components /ProgressCreateAd";
import { AiOutlineHome } from "react-icons/ai";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="container">
        <div className="menu-container">
          <ProfileMenuItem itemIcon={HouseIcon} text="Mina annonser" />
          <ProfileMenuItem itemIcon={FamilyIcon} text="Hyresgäster" />
          <ProfileMenuItem itemIcon={MessageIcon} text="Meddelanden" />
          <ProfileMenuItem itemIcon={SettingsIcon} text="Inställningar" />
          <ContactCard textOne="Kontakta din handläggare:" textTwo="Sahar Eriksson" />
        </div>
        <div className="content-container">
          <div className="top-flex-container">
            <h2>Din Profil</h2>
            <h5>Hej Göran!</h5>
            <p className="welcome-paragraph">
              Nu har du laddat upp din bostadsannons. Nästa steg är att hitta en bra hyresgäst för dig!
            </p>
            <div className="top-cards-container">
              <ClientPreviewCard
                topText="Gå till din annons"
                cardHeadline="Detta är en rubrik"
                cardDecptiption="Här står ngt..."
                rent="15.000"
              />
              <div className="second-card">
                <ClientPreviewCard
                  topText="Gå till din annons"
                  cardHeadline="Detta är en rubrik"
                  cardDecptiption="Här står ngt..."
                  rent="15.000"
                />
              </div>
            </div>
          </div>
          <h3>Här ser du dina hyresgäster som Kollektiva matchat till dig:</h3>
          <div className="bottom-cards-container">
            <ClientPreviewCard
              className="client-preview-card"
              topText="Läs mer om Erik"
              cardHeadline="Detta är en rubrik"
              cardDecptiption="Här står ngt om mig"
              image={DadGirl}
              rent="15.000"
            />
            <ClientPreviewCard
              className="client-preview-card"
              topText="Läs mer om Erik"
              cardHeadline="Detta är en rubrik"
              cardDecptiption="Här står ngt om mig"
              image={Couple}
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
              image={MotherIpad}
              rent="15.000"
            />
          </div>
        </div>
      </div>
      <CreateAdNextPrev text="Ändra" />
    </div>
  );
};

export default ProfilePage;
