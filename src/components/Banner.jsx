import React, { useState, useEffect } from "react";
import { useMouse } from "@uidotdev/usehooks";

const Banner = ({ selected }) => {
  const [mouse, ref] = useMouse();
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);
  const [manualMode, setManualMode] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
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

  // Fade-in effect on material change
  useEffect(() => {
    setFadeIn(false);
    const timeout = setTimeout(() => setFadeIn(true), 1000);
    return () => clearTimeout(timeout);
  }, [selected]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setManualMode(true); // switch to manual mode
  };

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
            display: "flex",
          }}
          onMouseEnter={resetToMouse}
        >
          <div className="banner">
            <img
              src={selected.img}
              alt={selected.text}
              className={fadeIn ? "fade-in" : ""}
              key={selected.id} // forces re-render on image change
            />
          </div>

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

      <div className="form-wrapper">
        <h2>Distance for Circle</h2>
        <form onSubmit={handleSubmit}>
          <label>X:</label>
          <input
            type="number"
            value={xPosition}
            onChange={(e) => setXPosition(Number(e.target.value))}
          />
          <label>Y:</label>
          <input
            type="number"
            value={yPosition}
            onChange={(e) => setYPosition(Number(e.target.value))}
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
