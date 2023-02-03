import React, { useState } from "react";
import "./base.css";

const ProjectItem = (props) => {
  const { setIsResume, projectName, repoName, id } = props;
  const [highlight, setHighlight] = useState(false);

  const handleHighlight = () => {
    setHighlight(!highlight);
  };

  return (
    <span
      style={
        highlight
          ? {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "min-content",
              backgroundColor: "#59B1F1",
              cursor: "pointer",
            }
          : {
              display: "flex",
              flexDirection: "column",
              height: "min-content",
              alignItems: "center",
              cursor: "pointer",
            }
      }
      id={id}
      onClick={handleHighlight}
      onDoubleClick={() =>
        window.open(
          `https://github.com/Furkan-Ozdemir/${repoName}`,
          "_blank",
          "noreferrer"
        )
      }
      onContextMenu={(e) => setIsResume(e.currentTarget.id === projectName)}
    >
      <img src="/images/notepad.png" alt={projectName} />
      <span>{projectName}</span>
    </span>
  );
};

export default ProjectItem;
