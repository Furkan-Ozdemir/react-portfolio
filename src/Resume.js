import React, { useState } from "react";
import "./base.css";

const Resume = () => {
  const [highlight, setHighlight] = useState(false);

  const handleHighlight = () => {
    setHighlight(!highlight);
    unHighlight();
  };
  const unHighlight = () => {
    document.getElementById("trash").style.backgroundColor = "transparent";
  };

  return (
    <span
      style={
        highlight
          ? {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "min-content",
              backgroundColor: "#59B1F1",
            }
          : {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "min-content",
            }
      }
      id="resume"
      onClick={handleHighlight}
    >
      <img src="/images/notepad.png" alt="resume" />
      <span>Furkan Özdemir CV</span>
    </span>
  );
};

export default Resume;
