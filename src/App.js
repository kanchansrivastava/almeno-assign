import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import "./css/main.min.css";
import Click from "./components/Click";
import Feed from "./components/Feed";
import Eating from "./components/Eating";
import End from "./components/End";
import { Howl } from "howler";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [playMusic, setPlayMusic] = useState(true);
  const [playSound, setPlaySound] = useState(true);
  var musicSound;
  useEffect(() => {
    musicSound = new Howl({
      loop: true,
      autoplay: true,
      volume: 0.2,
      src: ["./sounds/bg1.mp3"],
    });
    if (playMusic) {
      musicSound.play();
    } else {
      musicSound.stop();
    }
  }, [playMusic, musicSound]);

  const handleMusicSetting = (e) => {
    setPlayMusic(!playMusic);
    musicSound === true ? musicSound.play() : musicSound.stop();
  };
  const handleSoundSetting = (e) => {
    setPlaySound(!playSound);
    // musicSound === true ? musicSound.play() : musicSound.stop();
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Home
                {...props}
                playMusic={playMusic}
                playSound={playSound}
                handleMusicSetting={handleMusicSetting}
                handleSoundSetting={handleSoundSetting}
              />
            )}
          />
          <Route
            path="/click"
            exact
            render={(props) => <Click {...props} playSound={playSound} />}
          />
          <Route
            path="/feed"
            exact
            render={(props) => <Feed {...props} playSound={playSound} />}
          />
          <Route
            path="/eating"
            exact
            render={(props) => <Eating {...props} playSound={playSound} />}
          />
          <Route
            path="/end"
            exact
            render={(props) => <End {...props} playSound={playSound} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
