import React from "react";
import "./startPage.scss";
import Button from "../components /Button";
import UspCard from "../components /UspCard";
import Image from "../Assets/Images/dummy1.webp";
import DummyImage from "../Assets/Images/dummy2.webp";
import ContactCard from "../components /ContactCard";
import { navigate } from "@reach/router";
import { BsChevronDown } from "react-icons/bs";
import HeroDesktop from "../Assets/Images/hero-desktop.svg";

const StartPage = () => {
  return (
    <div>
      <div className="header-container">
        <div className="img-container">
          <img src={HeroDesktop}></img>
          <div className="white-box"></div>
        </div>
        <div className="content-container">
          <div className="headers-div">
            <h1>Välkommen till Kollektiva</h1>
            <h3>Den trygga tjänsten för dig som hyresvärd och hyresgäst att hyra ut din bostad på ett säkert sätt.</h3>
          </div>
          <div className="flex-container">
            <Button text="Skapa annons" handleClick={() => navigate("/create-ad")} />
            <div className="circle-arrow">
              <BsChevronDown size="40px" />
            </div>
          </div>
        </div>
      </div>
      <div className="contact-card">
        <ContactCard textOne="Kontakta oss" textTwo="0701-66 77 88" />
      </div>
      <section className="about-container">
        <div className="text-container">
          <h2>Om Kollektiva</h2>
          <p>
            Kollektiva är en plattform där du som hyresvärd kan hyra ut ditt hus på ett tryggt och säkert sätt. Vi på
            Kollektiva hjälper dig att hitta den bästa matchningen för dig som hyresvärd och hyresgäst. Så att båda
            partnerna blir nöjda och glada.
          </p>
        </div>
        <img src={DummyImage} alt="a house"></img>
      </section>
      <section className="usp-section">
        <h3>Såhär funkar kollektiva</h3>
        <div className="usp-container">
          <UspCard alt="Alt" text="Skapa en profil som hyresgäst/hyresvärd." uspImage={Image} />
          <UspCard
            alt="Alt"
            text="Ladda upp din bostad som hyresvärd. Anmäl intresse på bostaden du önskar som hyresgäst."
            uspImage={Image}
          />
          <UspCard
            alt="Alt"
            text="Matcha med varandra på ett tryggt sätt och flytta in i din nya bostad. "
            uspImage={Image}
          />
        </div>
      </section>
    </div>
  );
};

export default StartPage;
