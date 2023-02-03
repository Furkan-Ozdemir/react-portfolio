import React, { useState } from "react";
import Menu from "./Menu";

const StartMenu = (props) => {
  const { openInNewTab } = props;
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <>
      <img
        style={{ width: "125px", cursor: "pointer" }}
        src="/images/abc.png"
        alt="start menu"
        onClick={() => setIsMenuVisible(!isMenuVisible)}
      />
      {isMenuVisible && <Menu openInNewTab={openInNewTab} />}
    </>
  );
};

export default StartMenu;
