import React, { useState } from "react";
import "./base.css";

const RecycleBin = (props) => {
  const { setIsResume } = props;
  const [highlight, setHighlight] = useState(false);

  const handleHighlight = () => {
    setHighlight(!highlight);
    unHighlight();
  };
  const unHighlight = () => {
    document.getElementById("resume").style.backgroundColor = "transparent";
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
              top: "124px",
              left: "240px",
              backgroundColor: "#59B1F1",
              cursor: "pointer",
            }
          : {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              top: "124px",
              left: "240px",
              width: "min-content",
              cursor: "pointer",
            }
      }
      id="trash"
      onClick={handleHighlight}
      onContextMenu={(e) => {
        setIsResume(e.currentTarget.id === "resume");
      }}
    >
      <img src="/images/trash.png" alt="trash can" />
      <span>Trash Can</span>
    </span>
  );
};

export default RecycleBin;
