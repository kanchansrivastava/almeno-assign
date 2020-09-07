import React, { useRef, useEffect } from "react";

import dogEating from "../images/dogEating.svg";
import foodSmall from "../images/foodSmall.png";
import { TweenMax } from "gsap";
import { Howl } from "howler";

const Eating = ({ history, playSound, location }) => {
  let dogImageQuery = useRef(null);
  useEffect(() => {
    TweenMax.to(dogImageQuery, 2, { opacity: 1, scale: 1 });

    var eatingSound = new Howl({
      volume: 2,
      loop: true,
      src: ["../sounds/eating.mp3"],
    });
    if (playSound) {
      eatingSound.play();
    } else {
      eatingSound.stop();
    }
    setTimeout(() => {
      TweenMax.to(dogImageQuery, 3, { opacity: 0, scale: 1 });
    }, 10000);
    setTimeout(() => {
      history.push("/end");
      eatingSound.stop();
    }, 10000);
  });

  return (
    <div id="eating">
      <div id="feed">
        <div id="home">
          <div className="screen">
            <div className="wrapper">
              <div className="dog" ref={(ele) => (dogImageQuery = ele)}>
                <img src={dogEating} alt="" />
                <img
                  src={location.state.imgSrc}
                  alt=""
                  className="food-small"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eating;
