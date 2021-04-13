import React, { useRef, useEffect } from "react";
import Webcam from "react-webcam";

import "./webcam.css";

/* this is the Webcam component to display a
webcam for the user to capture its emotion */

let WebCam = () => {
	const webcamRef = useRef(null);
	const canvasRef = useRef(null);

	const detect = async () => {
		if (
			typeof webcamRef.current !== "undefined" &&
			webcamRef.current !== null &&
			webcamRef.current.video.readyState === 4
		) {
			const videoWidth = webcamRef.current.video.videoWidth;
			const videoHeight = webcamRef.current.video.videoHeight;

			webcamRef.current.video.width = videoWidth;
			webcamRef.current.video.height = videoHeight;

			canvasRef.current.width = videoWidth;
			canvasRef.current.height = videoHeight;


		}
	};

	useEffect(() => { 
    detect();
	}, []);

  const videoConstraints = {
    facingMode: 'user'
  }

  return (
    <div className="App">
      <header className="App-header">
        <Webcam className="webcam"
          ref={webcamRef}
          muted={true}
          videoConstraints={videoConstraints}
        />
        <canvas
        className="webcam-canvas"
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 8,
            width: 640,
            height: 480,
          }}
        />
      </header>
    </div>
  );
}

export default WebCam;
