import React from "react";
import Webcam from "react-webcam";
import { useState } from "react";

const Camera = ({ playSound, history }) => {
  const videoConstraints = {
    width: 420,
    height: 420,
    facingMode: { exact: "environment" },
  };
  const webcamRef = React.useRef(null);
  const [imagevar, setimagevar] = useState("");

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setimagevar(imageSrc);
    setTimeout(() => {
      history.push({ pathname: "/click", state: { imgSrc: imagevar } });
    }, 3000);
  }, [webcamRef, history, imagevar]);
  return (
    <div style={{ textAlign: "center" }}>
      <Webcam
        audio={false}
        height={420}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={420}
        videoConstraints={videoConstraints}
        style={{ display: "block" }}
      />
      <button onClick={capture}>Capture photo</button>
      <img src={imagevar} alt="" height="100" width="100" />
    </div>
  );
};

export default Camera;
