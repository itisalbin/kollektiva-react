import React from "react";
import "./startPage.scss";
import Button from "../components /Button";
import UspCard from "../components /UspCard";
import Image from "../Assets/Images/dummy1.webp";
import DummyImage from "../Assets/Images/dummy2.webp";

const StartPage = () => {
  return (
    <div>
      <div className="header-container">
        <h1>Välkommen till Kollektiva</h1>
        <p>
          Den trygga tjänsten för dig som hyresvärd och hyresgäst att hyra ut
          din bostad på ett säkert sätt.
        </p>
        <Button text="Skapa annons" />
         </div>
      <section className="about-container">
        <div className="text-container">
          <h2>Om Kollektiva</h2>
          <p>
            Kollektiva är en plattform där du som hyresvärd kan hyra ut ditt hus
            på ett tryggt och säkert sätt. Vi på Kollektiva hjälper dig att
            hitta den bästa matchningen för dig som hyresvärd och hyresgäst. Så
            att båda partnerna blir nöjda och glada.
          </p>
        </div>
        <img src={DummyImage} alt="a house"></img>
      </section>
      <div className="usp-container">
        <UspCard
          alt="Alt"
          text="Skapa en profil som hyresgäst/hyresvärd."
          uspImage={Image}
        />
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
    </div>
  );
};

export default StartPage;
