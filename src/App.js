import React, { useState, useEffect } from "react";
import Bar from "./Bar";
import RecycleBin from "./RecycleBin";
import Resume from "./Resume";
import MyProjects from "./MyProjects";
import ContextMenu from "./ContextMenu";

const App = () => {
  const [xPos, setXPos] = useState("");
  const [yPos, setYPos] = useState("");
  const [showContextMenu, setShowContextMenu] = useState(false);

  useEffect(() => {
    const handleContextmenu = (e) => {
      e.preventDefault();
      setXPos(e.pageX + "px");
      setYPos(e.pageY + "px");
      setShowContextMenu(!showContextMenu);
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, [showContextMenu]);
  const openInNewTab = (url, width, height, left, top) => {
    const newWindow = window.open(
      url,
      "",
      `width=${width},height=${height},left=${left},top=${top}`
    );
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div
      className="app"
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      <Resume openInNewTab={openInNewTab} />
      <RecycleBin openInNewTab={openInNewTab} />
      <MyProjects openInNewTab={openInNewTab} />
      <Bar />
      {showContextMenu && <ContextMenu xPos={xPos} yPos={yPos} />}
    </div>
  );
};

export default App;
