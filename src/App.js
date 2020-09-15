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
import { useState, useRef } from "react";
import Camera from "./components/Camera";
import Click2 from "./components/Click2";

function App() {
  const [playMusic, setPlayMusic] = useState(true);
  const [playSound, setPlaySound] = useState(true);
  let musicSound = useRef(
    new Howl({
      loop: true,
      autoplay: false,
      volume: 0.2,
      src: ["./sounds/bg1.mp3"],
    })
  );

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
                musicSound={musicSound}
                playSound={playSound}
              />
            )}
          />
          <Route
            path="/click"
            exact
            render={(props) => <Click {...props}
            musicSound={musicSound}
            playSound={playSound}
            />}
          />
          <Route
            path="/click2"
            exact
            render={(props) => <Click2 {...props} playSound={playSound} />}
          />
          <Route
            path="/camera"
            exact
            render={(props) => <Camera {...props} playSound={playSound} />}
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
