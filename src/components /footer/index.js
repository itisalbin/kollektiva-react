import React, { useState } from "react";
import ContactCard from "../ContactCard";
import "./footer.scss";
//import PropTypes from "prop-types";

const Footer = () => {
  const [firstSubIsOpen, setFirstSubOpen] = useState("false");
  const [secondSubIsOpen, setSecondSubOpen] = useState("false");
  const [thirdSubIsOpen, setThirdSubOpen] = useState("false");

  const toggleFirst = () => {
    setFirstSubOpen(!firstSubIsOpen);
  };
  const toggleSecond = () => {
    setSecondSubOpen(!secondSubIsOpen);
  };
  const toggleThird = () => {
    setThirdSubOpen(!thirdSubIsOpen);
  };

  return (
    <footer className="footer">
      <div className="content-container">
        <h5>KOLLEKTIVA</h5>
        <div className="link-container">
          <div className="sub-link-container">
            <div className="line"></div>
            <div className="sub-header">
              <p>Om Kollektiva</p>
              <button className="button-om" onClick={toggleFirst}>
                v
              </button>
            </div>
            <div className={`collapsable ${firstSubIsOpen ? "footer-sub-open" : null}`}>
              <a href="">Så här fungerar Kollektiva</a>
              <a href="">Hyr ut din bostad</a>
              <a href="">Sök bostad</a>
              <a href="">Logga in</a>
            </div>
          </div>
          <div className="sub-link-container">
            <div className="line"></div>
            <div className="sub-header">
              <p>Support</p>
              <button className="button-support" onClick={toggleSecond}>
                v
              </button>
            </div>
            <div className={`collapsable ${secondSubIsOpen ? "footer-sub-open" : null}`}>
              <a href="">Lämna feedback</a>
              <a href="">info@kollektiva.se</a>
            </div>
          </div>
          <div className="sub-link-container">
            <div className="line"></div>
            <div className="sub-header">
              <p>Följ oss</p>
              <button className="button-follow" onClick={toggleThird}>
                v
              </button>
            </div>
            <div className={`collapsable ${thirdSubIsOpen ? "footer-sub-open" : null}`}>
              <a href="">LinkedIn</a>
              <a href="">Facebook</a>
              <a href="">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
