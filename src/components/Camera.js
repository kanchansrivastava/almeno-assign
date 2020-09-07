import React from "react";
import Webcam from "react-webcam";

const Camera = ({ playSound, history }) => {
  const videoConstraints = {
    width: 420,
    height: 420,
    facingMode: { exact: "environment" },
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
        height={420}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={420}
        videoConstraints={videoConstraints}
        style={{ display: "block" }}
      />
      <button onClick={capture} style={{ marginTop: "4rem" }}>
        Capture photo
      </button>
    </div>
  );
};

export default Camera;
