import React from "react";
import "./ImageItem.css";

const Image = (props) => {
  const { src, alt, text, textColor } = props;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        color: textColor,
        cursor: "pointer",
      }}
    >
      <img src={src} alt={alt} style={{ padding: "10px" }} />
      <span className="imageItem" style={{ paddingRight: "10px" }}>
        {text}
      </span>
    </div>
  );
};

export default Image;
