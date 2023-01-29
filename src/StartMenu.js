import React, { useState } from "react";
import Menu from "./Menu";

const StartMenu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <>
      <img
        style={{ width: "125px", cursor: "pointer" }}
        src="/images/abc.png"
        alt="start menu"
        onClick={() => setIsMenuVisible(!isMenuVisible)}
      />
      {isMenuVisible && <Menu />}
    </>
  );
};

export default StartMenu;
