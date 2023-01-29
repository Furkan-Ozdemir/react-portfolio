import React, { useState } from "react";
import "./base.css";

const RecycleBin = () => {
  const [highlight, setHighlight] = useState(false);

  const handleHighlight = () => {
    setHighlight(!highlight);
    unHighlight();
  };
  const unHighlight = () => {
    document.getElementById("resume").style.backgroundColor = "transparent";
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
      id="trash"
      onClick={handleHighlight}
    >
      <img src="/images/trash.png" alt="trash can" />
      <span>Trash Can</span>
    </span>
  );
};

export default RecycleBin;
