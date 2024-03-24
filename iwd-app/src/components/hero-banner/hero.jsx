import React, { useState } from 'react';
import "./hero.css";
import globeGIF from "../../assets/hero/globe.gif";
import heroGirl from "../../assets/hero/women-hero.png";
import background from "../../assets/hero/hero-background.PNG";
import date from "../../assets/hero/rocket-2.jpeg";
import mobilebg from "../../assets/hero/mobile-hero-asset.PNG";

function Hero() {
  
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
    setTimeout(() => {
      setActive(false); // revert the button to normal state after 1 second
      //window.open("https://docs.google.com/forms/d/e/1FAIpQLSeXEqlXIG1UCwjMS_mUEa6H_e3VxvqqDmpUmP-MJSTp4cJrtQ/viewform", '_blank')
    }, 1000);
  };
  
  return (
    <div className="app-section hero-banner">
      <div className="top-row">
        <div className="title-div">
          <div className="heading-div">
            <h1>
              Impact <br /> The Future
            </h1>
            <img id="globe-gif" src={globeGIF}></img>
          </div>
          <h2>Detroit International Women's Day Summit 2024</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea  commodo consequat.
          </p>
          <button id={active ? "tickets-bt-nactive" : "tickets-btn"} onClick={handleClick}>
      <a target="-blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeXEqlXIG1UCwjMS_mUEa6H_e3VxvqqDmpUmP-MJSTp4cJrtQ/viewform">
        Get Tickets
      </a>
    </button>
          
        </div>
        <div className="woman-date-colum">
          <div className="woman-img-div">
            <img id="woman-hero" src={heroGirl}></img>
          </div>
          <img id="date-img" src={date}></img>
        </div>
      </div>
      <div className="background-div">
        <img id="background-img" src={background}></img>
      </div>
      <div className="date-img-div">
        {/* <img id="date-animation" src={dateAnimation}></img> */}
        {/* <img id="date-img" src={date}></img> */}
      </div>
      <img id="mobile-bg" src={mobilebg}></img>
    </div>
  );
}

export default Hero;
