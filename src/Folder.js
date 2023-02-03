import React from "react";
import styled from "styled-components";
import Image from "./Image";

const Folder = (props) => {
  const { title } = props;
  const FolderWrapper = styled.div`
    height: 600px;
    width: 800px;
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
  `;
  const FileandFolderBar = styled.div`
    background-color: #7292e0;
    display: flex;
    flex-direction: column;
  `;
  const WhiteSpace = styled.div`
    background-color: #fff;
  `;
  const MainWrapper = styled.div`
    display: flex;
    height: 455px;
  `;
  return (
    <FolderWrapper id="folder">
      <TitleBar>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ height: "25px", margin: "4px" }}
            src="/images/mydocs.png"
            alt="folder icon"
          />
          <span style={{ color: "#fff", paddingLeft: "5px" }}>asfsaf</span>
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
            (document.getElementById("folder").style.display = "none")
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
              />
              <span>My Computer</span>
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
              />
              <span>Shared Computer</span>
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
              />
              <span>My Network Places</span>
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
              />
              <span>Publish this folder to the Web</span>
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
              />
              <span>Search a File</span>
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
              />
              <span>Make a New Folder</span>
            </div>
          </div>
        </FileandFolderBar>
        <WhiteSpace>iconlar</WhiteSpace>
      </MainWrapper>
    </FolderWrapper>
  );
};

export default Folder;
