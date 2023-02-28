import React, { useState, useEffect } from "react";
import Bar from "./Bar";
import RecycleBin from "./RecycleBin";
import Resume from "./Resume";
import MyProjects from "./MyProjects";
import ContextMenu from "./ContextMenu";
import Folder from "./Folder";
import Email from "./Email";
import Trash from "./Trash";
import styled from "styled-components";
import "@christianliebel/paint";

const App = () => {
  const [xPos, setXPos] = useState("");
  const [yPos, setYPos] = useState("");
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [isResume, setIsResume] = useState(false); // TODO isDownloadable refactor later
  const [locationData, setLocationData] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);
  useEffect(() => {
    getLocationData();
  }, []);

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
  const showFolder = () =>
    (document.getElementById("folder").style.display = "block");
  const showTrash = () =>
    (document.getElementById("trashFolder").style.display = "block");

  const getLocationData = async () => {
    try {
      const response = await fetch("https://geolocation-db.com/json/");
      const data = await response.json();
      setLocationData(data);
    } catch (error) {}
  };

  if (isMobile) {
    return (
      <p style={{ color: "tomato", textAlign: "center", fontSize: "2em" }}>
        Mobile version is not ready plz view it on a computer :d
      </p>
    );
  }

  return (
    <div
      className="app"
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      <div
        style={{
          display: "none",
          position: "absolute",
          zIndex: 999,
          width: "75%",
        }}
        id="paint"
      >
        <TitleBar>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              style={{ height: "25px", margin: "4px" }}
              src="/images/paint.png"
              alt="trash icon"
            />
            <span style={{ color: "#fff", paddingLeft: "5px" }}>Paint</span>
          </div>
          <img
            style={{
              cursor: "pointer",
              border: "1px solid #fff",
              borderRadius: "50%",
            }}
            src="/images/closeIcon.png"
            alt="close icon"
            onClick={() =>
              (document.getElementById("paint").style.display = "none")
            }
          />
        </TitleBar>
        <paint-app />
      </div>

      <Email locationData={locationData} setIsResume={setIsResume} />
      <Folder setIsResume={setIsResume} />
      <Resume openInNewTab={openInNewTab} setIsResume={setIsResume} />
      <RecycleBin
        showTrash={showTrash}
        openInNewTab={openInNewTab}
        setIsResume={setIsResume}
      />
      <MyProjects
        showFolder={showFolder}
        openInNewTab={openInNewTab}
        setIsResume={setIsResume}
      />
      <Trash />
      <Bar openInNewTab={openInNewTab} />
      {showContextMenu && (
        <ContextMenu isResume={isResume} xPos={xPos} yPos={yPos} />
      )}
    </div>
  );
};
const TitleBar = styled.div`
  height: 30px;
  background-color: #005bf2;
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
  margin-bottom: -3px;
`;
export default App;
