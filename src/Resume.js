import React, { useState } from "react";
import "./base.css";

const Resume = (props) => {
  const { openInNewTab, setIsResume } = props;
  const [highlight, setHighlight] = useState(false);

  const handleHighlight = () => {
    setHighlight(!highlight);
    unHighlight();
  };
  const unHighlight = () => {
    document.getElementById("trash").style.backgroundColor = "transparent";
    document.getElementById("myProjects").style.backgroundColor = "transparent";
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
              position: "relative",
              top: "100px",
              left: "600px",
              backgroundColor: "#59B1F1",
              cursor: "pointer",
            }
          : {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              top: "100px",
              left: "600px",
              width: "min-content",
              cursor: "pointer",
            }
      }
      id="resume"
      onClick={handleHighlight}
      onDoubleClick={() =>
        openInNewTab("/images/cv_image.jpeg", 600, 800, 200, 200)
      }
      onContextMenu={(e) => setIsResume(e.currentTarget.id === "resume")}
    >
      <img src="/images/image.png" alt="resume" />
      <span>Furkan Özdemir CV</span>
    </span>
  );
};

export default Resume;
