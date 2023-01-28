import React from "react";

const Resume = () => {
  return (
    <span
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "min-content",
      }}
    >
      <img src="/images/notepad.png" alt="resume" />
      <span>Furkan Özdemir CV</span>
    </span>
  );
};

export default Resume;
