import React, { useState } from "react";
import styled from "styled-components";

const Trash = (props) => {
  const [highlight, setHighlight] = useState(false);

  const handleHighlight = () => {
    setHighlight(!highlight);
  };

  return (
    <FolderWrapper id="trashFolder">
      <TitleBar>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ height: "25px", margin: "4px" }}
            src="/images/trash.png"
            alt="trash icon"
          />
          <span style={{ color: "#fff", paddingLeft: "5px" }}>Trash Can</span>
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
            (document.getElementById("trashFolder").style.display = "none")
          }
        />
      </TitleBar>
      <MenuBar>
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Tools</span>
        <span>Help</span>
      </MenuBar>
      <NavigationBar>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            alignContent: "center",
          }}
        >
          <img
            style={{
              width: "30px",
              transform: "rotate(180deg)",
              marginBottom: "5px",
              alignSelf: "center",
            }}
            src="/images/back_button.png"
            alt="back button"
            className="navigation_bar_img"
          />
          <span>Back</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px",
          }}
        >
          <img
            style={{
              width: "30px",
              marginBottom: "5px",
              alignSelf: "center",
            }}
            src="/images/back_button.png"
            alt="forward button"
            className="navigation_bar_img"
          />
          <span>Forward</span>
        </div>
        <div style={{ borderLeft: "1px solid #a9a9a9" }}></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px",
          }}
        >
          <img
            style={{
              width: "30px",
              marginBottom: "5px",
              alignSelf: "center",
            }}
            src="/images/searchIcon.png"
            alt="search button"
            className="navigation_bar_img"
          />
          <span>Search</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px",
          }}
        >
          <img
            style={{
              width: "30px",
              marginBottom: "5px",
              alignSelf: "center",
            }}
            src="/images/mydocs.png"
            alt="folders"
            className="navigation_bar_img"
          />
          <span>Folders</span>
        </div>
        <div style={{ borderLeft: "1px solid #a9a9a9" }}></div>
      </NavigationBar>
      <MainWrapper>
        <FileandFolderBar>
          <div
            style={{
              padding: "20px",
              margin: "15px",
              borderRadius: "5px",
              background:
                "linear-gradient(-180deg, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.10) 100%)",
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                color: "#005bf2",
                fontWeight: "bold",
                borderRadius: "5px",
                padding: "5px",
                marginBottom: "15px",
              }}
              className="FileandFolderBar_title"
            >
              Other Places
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "5px",
              }}
            >
              <img
                src="/images/mycomputer.png"
                alt="my computer"
                style={{ width: "24px", marginRight: "10px" }}
                className="FileandFolderBar_img"
              />
              <span className="FileandFolderBar_text">My Computer</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "5px",
              }}
            >
              <img
                src="/images/mydocs.png"
                alt="Shared Computer"
                style={{ width: "24px", marginRight: "10px" }}
                className="FileandFolderBar_img"
              />
              <span className="FileandFolderBar_text">Shared Computer</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "5px",
              }}
            >
              <img
                src="/images/network.png"
                alt="network"
                style={{ width: "24px", marginRight: "10px" }}
                className="FileandFolderBar_img"
              />
              <span className="FileandFolderBar_text">My Network Places</span>
            </div>
          </div>
          <div
            style={{
              padding: "20px",
              margin: "15px",
              borderRadius: "5px",
              background:
                "linear-gradient(-180deg, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.10) 100%)",
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                color: "#005bf2",
                fontWeight: "bold",
                borderRadius: "5px",
                padding: "5px",
                marginBottom: "15px",
              }}
              className="FileandFolderBar_title"
            >
              File and Folder Tasks
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "5px",
              }}
            >
              <img
                src="/images/publishToWorld.png"
                alt="my computer"
                style={{ width: "24px", marginRight: "10px" }}
                className="FileandFolderBar_img"
              />
              <span className="FileandFolderBar_text">
                Publish this folder to the Web
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "5px",
              }}
            >
              <img
                src="/images/searchFile.png"
                alt="Search a File"
                style={{ width: "24px", marginRight: "10px" }}
                className="FileandFolderBar_img"
              />
              <span className="FileandFolderBar_text">Search a File</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "5px",
              }}
            >
              <img
                src="/images/mydocs.png"
                alt="new folder"
                style={{ width: "24px", marginRight: "10px" }}
                className="FileandFolderBar_img"
              />
              <span className="FileandFolderBar_text">Make a New Folder</span>
            </div>
          </div>
        </FileandFolderBar>
        <WhiteSpace>
          <div
            onClick={handleHighlight}
            style={
              highlight
                ? { backgroundColor: "#59B1F1" }
                : { backgroundColor: "transparent" }
            }
          >
            <img src="/images/iexplorer.png" alt="iexplorer" />
            <div style={{ padding: "5px" }}>Internet Explorer</div>
          </div>
        </WhiteSpace>
      </MainWrapper>
    </FolderWrapper>
  );
};
const FolderWrapper = styled.div`
  display: none;
  height: 600px;
  width: 850px;
  border: 3px solid #005bf2;
  position: absolute;
  left: 0;
  right: 0;
  top: 50px;
  margin-left: auto;
  margin-right: auto;
  z-index: 100;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const TitleBar = styled.div`
  height: 30px;
  background-color: #005bf2;
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
`;

const MenuBar = styled.div`
  display: flex;
  background-color: #efedd8;
  border-bottom: 1px solid #a9a9a9;
  padding: 7px;
  & > * {
    margin-right: 15px;
    padding: 5px;
    cursor: pointer;

    &:hover {
      background-color: #fff;
    }
  }
`;
const NavigationBar = styled.div`
  background-color: #efedd8;
  display: flex;

  & > * {
    margin-right: 15px;
  }
  .navigation_bar_img:hover {
    cursor: pointer;
  }
  .navigation_bar_img:hover ~ span {
    background-color: #275199;
    color: #fff;
  }
  .navigation_bar_img + span:hover {
    background-color: #275199;
    color: #fff;
    cursor: pointer;
  }
`;
const FileandFolderBar = styled.div`
  background-color: #7292e0;
  display: flex;
  flex-direction: column;
  & > * {
    cursor: pointer;
  }
  .FileandFolderBar_title:hover,
  .FileandFolderBar_text:hover {
    text-decoration-line: underline;
  }
`;
const WhiteSpace = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  & img {
    height: 45px;
    width: 45px;
  }
  & > div:hover {
    cursor: pointer;
  }
  & > div {
    align-self: flex-start;
    margin: 20px;
    text-align: center;
  }
`;
const MainWrapper = styled.div`
  display: flex;
  height: 446px;
`;

export default Trash;
