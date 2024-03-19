import React from "react";
// import Rosie from "../../images/Rosie2.png";
import "./styles.css";

const str = "ROSIE THE BAT DOG";

const Title = () => {
  let newTitle = [];
  for (let i = 0; i < str.length; i++) {
    newTitle.push(
      <div key={i} className="wrapper">
        <div  id={str[i]} className="letter">
          {str[i]}
        </div>
        <div className="shadow">{str[i]}</div>
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
