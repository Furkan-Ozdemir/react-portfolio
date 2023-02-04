import React, { useState } from "react";
import styled from "styled-components";
import ProjectItem from "./ProjectItem";

const Email = (props) => {
  const { title, setIsResume } = props;
  const [fontFamily, setFontFamily] = useState("Serif");
  const [textAreaState, setTextAreaText] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [fontSize, setFontSize] = useState("20px");

  const handleFontFamily = (e) => {
    setFontFamily(e.currentTarget.value);
  };

  return (
    <FolderWrapper id="email">
      <TitleBar>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ height: "25px", margin: "4px" }}
            src="/images/send.png"
            alt="folder icon"
          />
          <span style={{ color: "#fff", paddingLeft: "5px" }}>Email</span>
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
            (document.getElementById("email").style.display = "none")
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
            src="/images/send.png"
            alt="send button"
            className="navigation_bar_img"
          />
          <span>Send Email</span>
        </div>
      </NavigationBar>
      <EmaiWrapper>
        <EmailHeader>
          <form>
            <EmailItem>
              <span>From:</span>
              <input
                style={{ marginLeft: "15px" }}
                required
                type="email"
                value={fromEmail}
                onChange={(e) => setFromEmail(e.target.value)}
              ></input>
            </EmailItem>
            <EmailItem>
              <span>To:</span>
              <input
                style={{ marginLeft: "35px", cursor: "not-allowed" }}
                disabled
                placeholder="me"
                type="email"
              ></input>
            </EmailItem>
            <EmailItem>
              <span>Subject:</span>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              ></input>
            </EmailItem>
          </form>
        </EmailHeader>
        <TextAreaHeader>
          <select
            id="fontFamily"
            onChange={handleFontFamily}
            style={{ paddingRight: "100px", fontFamily: fontFamily }}
            value={fontFamily}
          >
            <option value="Serif" style={{ fontFamily: "serif" }}>
              Serif
            </option>
            <option value="Monospace" style={{ fontFamily: "monospace" }}>
              Monospace
            </option>
            <option value="Cursive" style={{ fontFamily: "cursive" }}>
              Cursive
            </option>
            <option value="Fantasy" style={{ fontFamily: "fantasy" }}>
              Fantasy
            </option>
          </select>
          <select
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
            id="fontSize"
            style={{ margin: "5px" }}
          >
            <option value="10px">10</option>
            <option value="15px">15</option>
            <option value="20px">20</option>
            <option value="25px">25</option>
          </select>
          <span
            style={{ borderLeft: "1px solid #a9a9a9", margin: "0 15px" }}
          ></span>

          <TextAreaHeaderIcons>
            <img
              src="/images/boldIcon.png"
              style={{ width: "13px", cursor: "pointer " }}
              alt=""
            />
            <img
              src="/images/italic.png"
              style={{ width: "13px", cursor: "pointer " }}
              alt=""
            />
            <img
              src="/images/underline.png"
              style={{ width: "13px", cursor: "pointer " }}
              alt=""
            />
            <span
              style={{ borderLeft: "1px solid #a9a9a9", margin: "0 15px" }}
            ></span>
            <img
              src="/images/left-align.png"
              style={{ width: "13px", cursor: "pointer " }}
              alt=""
            />
            <img
              src="/images/right-align.png"
              style={{ width: "13px", cursor: "pointer " }}
              alt=""
            />
            <img
              src="/images/center-align.png"
              style={{ width: "13px", cursor: "pointer " }}
              alt=""
            />
          </TextAreaHeaderIcons>
        </TextAreaHeader>
        <EmailTextArea
          required
          id="emailTextArea"
          type="text"
          name="emailTextArea"
          style={{ fontFamily: fontFamily, fontSize: fontSize }}
          value={textAreaState}
          onChange={(e) => setTextAreaText(e.target.value)}
        />
      </EmaiWrapper>
    </FolderWrapper>
  );
};
const FolderWrapper = styled.div`
  display: block;
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
const EmailHeader = styled.div`
  background-color: #efedd8;
`;
const EmaiWrapper = styled.div``;
const EmailItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 100%;
  & input {
    padding: 2px;
    flex: 1;
  }
`;
const EmailTextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 315px;
  overflow-y: scroll;
  padding: 10px;
`;
const TextAreaHeader = styled.div`
  background-color: #efedd8;
  padding-left: 5px;
`;
const TextAreaHeaderIcons = styled.span`
  * {
    margin: 0 10px;
  }
`;

export default Email;
