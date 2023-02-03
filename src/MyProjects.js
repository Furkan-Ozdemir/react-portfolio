import React, { useState } from "react";

const MyProjects = (props) => {
  const { setIsResume, showFolder } = props;
  const [highlight, setHighlight] = useState(false);

  const handleHighlight = () => {
    setHighlight(!highlight);
    unHighlight();
  };
  const unHighlight = () => {
    document.getElementById("resume").style.backgroundColor = "transparent";
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
              position: "relative",
              top: "159px",
              left: "610px",
              backgroundColor: "#59B1F1",
              cursor: "pointer",
            }
          : {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              top: "159px",
              left: "610px",
              width: "min-content",
              cursor: "pointer",
            }
      }
      id="myProjects"
      onClick={handleHighlight}
      onContextMenu={(e) => {
        setIsResume(e.currentTarget.id === "resume");
      }}
      onDoubleClick={showFolder}
    >
      <img src="/images/mydocs.png" alt="my projects" />
      <span>My Projects</span>
    </span>
  );
};

export default MyProjects;
