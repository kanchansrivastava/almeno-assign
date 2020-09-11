import React, { useState } from "react";
//import foodBig from "../images/foodBig.png";
//import { Link } from "react-router-dom";
//import { Howl } from "howler";
import Camera from "./Camera"

const Click = ({ playSound, history, location }) => {
//  var clickSound = new Howl({
//    src: ["../sounds/button-click.mp3"],
//  });
//  const [photoTaken, setPhotoTaken] = useState(false);
//  const handleButtonClick = (e) => {
//    if (playSound) {
//      clickSound.play();
//    } else {
//      clickSound.stop();
//    }
//    setPhotoTaken(!photoTaken);
//  };

  return (
    <div id="click">
      <div className="screen">
        <div className="wrapper">
          <Camera playSound={playSound} history={history}/>
        </div>
      </div>
    </div>
  );
};

export default Click;
