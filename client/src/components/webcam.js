import React, { useRef, useEffect } from "react";
import Webcam from "react-webcam";

import "./webcam.css";

/* this is the Webcam component to display a
webcam for the user to capture its emotion */

let WebCam = (props) => {
	const webcamRef = useRef(null);
  
  
  useEffect(() => {
    if(props.takePic) {
      capture()
      props.setOpen(true)
    }
  }, [props.takePic])

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    props.setImage(imageSrc);
  }, [webcamRef, props.setImage]);

  return (
    <div className="App">
      <header className="App-header">
        <Webcam className="webcam"
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/jpeg"
        />
      </header>
    </div>
  );
}

export default WebCam;
