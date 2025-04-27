import React, { useState, useEffect } from "react";
import { useMouse } from "@uidotdev/usehooks";
import image from "../assets/image-1.jpg";

const Banner = () => {
  const [mouse, ref] = useMouse();
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);
  const [manualMode, setManualMode] = useState(false);

  // Restrict updates to inside only
  useEffect(() => {
    const isInside =
      mouse.elementX >= 0 &&
      mouse.elementY >= 0 &&
      mouse.elementX <= 770 &&
      mouse.elementY <= 300;

    if (isInside && !manualMode) {
      setXPosition(mouse.elementX);
      setYPosition(mouse.elementY);
    }
  }, [mouse, manualMode]);

  /*   const handleSubmit = (e) => {
    e.preventDefault();
    setManualMode(true); // switch to manual mode
  };*/

  const resetToMouse = () => {
    setManualMode(false); // go back to tracking
  };

  const circleVisible =
    (manualMode &&
      xPosition >= 0 &&
      yPosition >= 0 &&
      xPosition <= 770 &&
      yPosition <= 300) ||
    (!manualMode &&
      mouse.elementX >= 0 &&
      mouse.elementY >= 0 &&
      mouse.elementX <= 770 &&
      mouse.elementY <= 300);
  return (
    <div className="banner-wrapper">
      <div className="image-container">
        <article
          ref={ref}
          style={{
            position: "relative",
            width: "100%",
            height: "300px",
            marginBottom: "20px",
            border: "solid 1px #000",
            display: "flex",
          }}
          onMouseEnter={resetToMouse}
        >
          <img src={image} />
          {circleVisible && (
            <div
              style={{
                position: "absolute",
                left: xPosition,
                top: yPosition,
                transform: "translate(-50%, -50%)",
                width: 20,
                height: 20,
                borderRadius: "50%",
                border: "solid 1px red",
              }}
            />
          )}
        </article>
      </div>
    </div>
  );
};

export default Banner;
