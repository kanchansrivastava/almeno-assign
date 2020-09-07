import React, { useEffect, useRef } from "react";
import dogSitting from "../images/dogSitting.svg";
import vessel from "../images/vessel.svg";
// import foodSmall from "../images/foodSmall.png";
// import foodBig from "../images/foodBig.png";
import { TweenMax } from "gsap";
import { Howl } from "howler";

const Feed = ({ history, playSound, location }) => {
  let foodBigQuery = useRef(null);
  let foodSmallQuery = useRef(null);
  let dogImageQuery = useRef(null);
  useEffect(() => {
    var gruntSound = new Howl({ src: ["../sounds/grunt.mp3"] });
    if (playSound) {
      gruntSound.play();
    } else {
      gruntSound.stop();
    }
    TweenMax.to(dogImageQuery, 0.5, {
      scale: ".9",
      z: 20,
      y: -40,
      yoyo: true,
      repeat: 3,
    });
    TweenMax.to(
      foodBigQuery,
      3,
      {
        scale: ".4",
        y: "-20%",
        rotateX: "88deg",
        height: "100%",
        width: "300px",
        opacity: 0,
        transformOrigin: "center bottom",
      },
      "+=3"
    );
    TweenMax.to(
      foodSmallQuery,
      7,
      {
        opacity: 1,
      },
      "+=3"
    );

    setTimeout(() => {
      history.push({
        pathname: "/eating",
        state: { imgSrc: location.state.imgSrc },
      });
    }, 3000);
  }, [foodBigQuery, dogImageQuery, history, playSound]);

  return (
    <div id="feed">
      <div className="food-big">
        <img
          src={
            location.state.imgSrc
            // location.state?.imgSrc?.length === 0
            //   ? foodBig
            //   : location.state.imgSrc
          }
          alt=""
          id="food-big-img"
          ref={(element) => (foodBigQuery = element)}
        />
      </div>
      <div id="home">
        <div className="screen">
          <div className="wrapper">
            <div className="dog">
              <img
                src={dogSitting}
                alt=""
                ref={(ele) => (dogImageQuery = ele)}
              />
            </div>
            <div className="vessel">
              <img src={vessel} alt="" />
              <img
                src={
                  location.state.imgSrc
                  // location.state?.imgSrc?.length === 0
                  //   ? foodSmall
                  //   : location.state.imgSrc
                }
                alt=""
                className="food-small"
                ref={(element) => (foodSmallQuery = element)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
