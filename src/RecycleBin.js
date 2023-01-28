import React from "react";

const RecycleBin = () => {
  return (
    <span
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "min-content",
      }}
    >
      <img src="/images/trash.png" alt="trash can" />
      <span>Trash Can</span>
    </span>
  );
};

export default RecycleBin;
