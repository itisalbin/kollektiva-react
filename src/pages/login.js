import React from "react";
import "./login.scss";
import { IoIosArrowForward } from "react-icons/io";


const LogIn = () => {
  return (
    <div className="login-page">
      <div className="text-container">
        <h2>Logga in på Kollektiva</h2>
        <p>
          För att vi ska kunna matcha dig med den bästa hyresgästen/hyresvärden
          behöver du logga in.
        </p>
      </div>
      <div className="btn-container">
          <h3>Välj inloggning:</h3>
        <div className="btn">
          <a href="/">Bank-ID</a>
          <IoIosArrowForward/>
        </div>
        <div className="btn">
          <a href="/">Mobilt Bank-ID</a>
          <IoIosArrowForward/>
        </div>
        <div className="btn">
          <a href="/">E-postadress</a>
          <IoIosArrowForward/>
        </div>
        <div className="btn">
          <a href="/">Ring oss så hjälper vi dig</a>
          <IoIosArrowForward/>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
