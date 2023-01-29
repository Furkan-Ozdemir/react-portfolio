import React, { useState } from "react";

const Time = () => {
  const [time, setTime] = useState(
    new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })
  );

  const updateTime = () => {
    setTime(
      new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
    );
  };
  setInterval(updateTime, 60000);

  return (
    <span
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#59B1F1",
        alignSelf: "stretch",
        paddingLeft: "10px",
      }}
    >
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{ width: 20, margin: "0 5px" }}
          src="/images/speakers.png"
          alt="speakers"
        />
        <img
          style={{ width: 20 }}
          src="/images/bluetooth.png"
          alt="bluetooth icon"
        />
      </span>
      <span
        style={{
          padding: "0 15px",
        }}
      >
        {time}
      </span>
    </span>
  );
};

export default Time;
