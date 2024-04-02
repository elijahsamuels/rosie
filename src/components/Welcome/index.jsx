import React from "react";
import { UAParser } from 'ua-parser-js';
// import Rosie from "../../images/Rosie2.png";
import "./styles.css";
const parser = new UAParser();

let userAgent = parser.getResult();

const mobile = () => {
const {browser, device, os, ua} = userAgent
	if (device.model === 'iPhone' || device.type === 'mobile' || os.name === 'iOS' || ua.includes('iPhone') || browser.name.includes('mobile')) {
		return true
	}
	return false
}

let rosieTitle

if (mobile()) {
	rosieTitle = "ROSIE";
} else {
	rosieTitle = "ROSIE THE BAT DOG";
}

const Title = () => {
  let newTitle = [];
  for (let i = 0; i < rosieTitle.length; i++) {
    newTitle.push(
      <div key={i} className="wrapper">
        <div  id={rosieTitle[i]} className="letter">
          {rosieTitle[i]}
        </div>
        <div className="shadow">{rosieTitle[i]}</div>
      </div>
    );
  }
  return (
    <>
      <div className="overlay"></div>
      <div className="text">{newTitle}</div>
    </>
  );
};

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="title">
        <Title />
      </div>
      {/* <img src={Rosie} alt="Rosie" className="welcomePhoto" />
      <img src={Rosie} alt="Rosie" className="welcomePhoto" />
      <img src={Rosie} alt="Rosie" className="welcomePhoto" />
      <img src={Rosie} alt="Rosie" className="welcomePhoto" />
      <img src={Rosie} alt="Rosie" className="welcomePhoto" />
      <img src={Rosie} alt="Rosie" className="welcomePhoto" /> */}
    </div>
  );
};

export default Welcome;
