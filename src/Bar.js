import React from "react";
import StartMenu from "./StartMenu";

const Bar = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        backgroundColor: "#3b77bc",
        width: "100%",
      }}
    >
      <StartMenu />
    </div>
  );
};

export default Bar;
