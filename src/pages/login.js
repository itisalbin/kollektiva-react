import React from "react";
import "./login.scss";

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
        </div>
        <div className="btn">
          <a href="/">Mobilt Bank-ID</a>
        </div>
        <div className="btn">
          <a href="/">E-postadress</a>
        </div>
        <div className="btn">
          <a href="/">Ring oss så hjälper vi dig</a>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
