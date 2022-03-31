import React from "react";
import "./startPage.scss";
import TextInput from "../components /TextInput";
import Button from "../components /Button";

import UspCard from "../components /UspCard";
import Image from "../Assets/Images/dummy1.webp";

const StartPage = () => {
  return (
    <div>
      <h5>This is our startpage</h5>
      <div className="search-container">
        <div className="search-field">
          <TextInput lableText="Område" name="area" />
          <TextInput lableText="Område" name="area" />
          <Button
          text="Sök"
          />
        </div>
      </div>
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
