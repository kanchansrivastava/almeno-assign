import React from "react";
import dogSitting from "../images/dogSitting.svg";
import vessel from "../images/vessel.svg";
import watermelon from "../images/watermelon.png";
import leafyGreen from "../images/leafyGreen.png";
import { Link } from "react-router-dom";
import { Howl } from "howler";
const Home = ({
  playMusic,
  playSound,
  handleMusicSetting,
  handleSoundSetting,
}) => {
  var clickSound = new Howl({
    src: ["../sounds/button-click.mp3"],
  });

  return (
    <div id="home">
      <div className="screen">
        <div className="sound-controller">
          {/* <i
            className="fas fa-music"
            style={{ color: !playMusic && "#fff" }}
            onClick={handleMusicSetting}
          ></i> */}
          {/* <i
            className="fas fa-volume-up"
            style={{ color: !playSound && "#fff" }}
            onClick={handleSoundSetting}
          ></i> */}
        </div>
        <div className="wrapper">
          <div className="dog">
            <img src={dogSitting} alt="" />
          </div>
          <div className="vessel">
            <img src={vessel} alt="" />
          </div>
          <Link
            className="feed-button btn"
            to={{ pathname: "/click" }}
            onClick={() => {
              if (playSound) clickSound.play();
            }}
          >
            <img src={watermelon} alt="" />
            <h2>Feed Milo</h2>
            <img src={leafyGreen} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
