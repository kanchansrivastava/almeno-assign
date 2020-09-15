import React, { useState } from "react";
//import foodBig from "../images/foodBig.png";
//import { Link } from "react-router-dom";
//import { Howl } from "howler";
import Camera from "./Camera"

const Click = ({ playSound, musicSound, history, location }) => {
  musicSound.current.play();
  return (
    <div id="click">
      <div className="screen">
        <div className="wrapper">
          <div className="heading">Click a picture of your meal</div>
          <Camera playSound={playSound} history={history}/>
        </div>
      </div>
    </div>
  );
};

export default Click;
