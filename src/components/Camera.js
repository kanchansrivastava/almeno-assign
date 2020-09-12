import React from "react";
import Webcam from "react-webcam";
import camera from "../images/camera.svg";

const Camera = ({ playSound, history }) => {
  const videoConstraints = {
    width: 350,
    height: 350,
    facingMode: { exact: "environment" }
  };
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    history.push({ pathname: "/click2", state: { imgSrc: imageSrc } });
  }, [webcamRef, history]);

  return (
    <div style={{ textAlign: "center" }}>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        style={{ display: "block", borderRadius: "50%"}}
      />

      <span className="camera-button btn" style={{marginLeft: "10rem"}} onClick={capture}>
        <img src={camera} alt="" />
      </span>
    </div>
  );
};

export default Camera;
