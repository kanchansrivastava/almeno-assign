import React, { useEffect, useRef } from "react";
import dogSitting from "../images/dogSitting.svg";
import vessel from "../images/vessel.svg";
import bwarf1 from "../images/bwarf.svg";
import bwarf2 from "../images/bwarf.png";
import { TweenMax } from "gsap";
import { Howl } from "howler";

const End = ({ history, playSound }) => {
  let dogImageQuery = useRef(null);
  let dogQuery = useRef(null);
  let bwarpQuery = useRef(null);

  var eatingSound = new Howl({
    volume: 2,
    src: ["../sounds/yummy.mp3"],
  });
  if (playSound) {
    eatingSound.play();
  } else {
    eatingSound.stop();
  }
  useEffect(() => {
    TweenMax.fromTo(
      dogImageQuery,
      3,
      { opacity: 0.9, y: "-5px", scaleX: 1.02 },
      { opacity: 1, y: 0, scaleX: 1 }
    );
    TweenMax.to(dogQuery, 0.5, {
      scale: ".9",
      z: 20,
      y: -40,
      yoyo: true,
      repeat: 3,
    });
    TweenMax.to(bwarpQuery, 0.5, {
      scale: "1",
      z: 0,
      y: -40,
      x: 20,
      yoyo: true,
      repeat: 3,
    });
    setTimeout(() => {
      history.push("/");
    }, 3000);
  }, [dogImageQuery]);
  return (
    <div id="end">
      <div id="feed">
        <div id="home" ref={(ele) => (dogImageQuery = ele)}>
          <div className="screen">
            <div className="wrapper">
              <div className="dog">
                <img
                  src={dogSitting}
                  alt=""
                  className="dog-sitting"
                  ref={(ele) => (dogQuery = ele)}
                />
                <img
                  src={bwarf2}
                  alt=""
                  className="bwarp"
                  ref={(ele) => (bwarpQuery = ele)}
                />
              </div>
              <div className="vessel">
                <img src={vessel} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default End;
