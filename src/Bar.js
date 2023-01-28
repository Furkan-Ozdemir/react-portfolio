import React from "react";
import StartMenu from "./StartMenu";
import Time from "./Time";

const Bar = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        backgroundColor: "#245DDA",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <StartMenu />
      <Time />
    </div>
  );
};

export default Bar;
