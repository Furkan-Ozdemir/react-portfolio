import React from "react";
import Image from "./Image";

const Menu = (props) => {
  const { openInNewTab } = props;
  const openGoogle = () => {
    window.open("https://google.com", "_blank", "noreferrer");
  };

  return (
    <div
      style={{
        position: "fixed",
        left: "0",
        bottom: "40px",
        borderRadius: "5px",
        display: "flex",
        boxShadow: "0px 0px 6px",
        flexDirection: "column",
      }}
    >
      <div style={{ backgroundColor: "#245DDA" }}>
        <Image
          src="/images/pp.png"
          alt="profile pic"
          text="Administrator"
          textColor="#fff"
        />
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ backgroundColor: "#fff" }}>
          <div onClick={openGoogle}>
            <Image
              src="/images/iexplorer.png"
              alt="internet explorer"
              text="Internet Explorer"
            />
          </div>
          <div
            onClick={() =>
              (document.getElementById("email").style.display = "block")
            }
          >
            <Image src="/images/email.png" alt="email" text="E-mail" />
          </div>
          <hr />
          <Image
            src="/images/mediaplayer.png"
            alt="media player"
            text="Windows Media Player"
          />
          <Image src="/images/paint.png" alt="paint" text="Paint" />
        </div>
        <div
          id="verticalLine"
          style={{ borderLeft: "3px solid #b3cff5" }}
        ></div>
        <div style={{ backgroundColor: "#b3cff5" }}>
          <Image
            src="/images/mycomputer.png"
            alt="My computer"
            text="My Computer"
          />
          <Image
            src="/images/messenger.png"
            alt="messenger"
            text="MSN Messenger"
          />

          <Image src="/images/winrar.png" alt="winrar" text="WinRaR" />
          <Image src="/images/wordpad.png" alt="wordpad" text="Wordpad" />
          <Image
            src="/images/printer.png"
            alt="printer"
            text="Printers and Devices"
          />
          <Image
            src="/images/mine.png"
            alt="minesweeper"
            text="Windows Minesweeper"
          />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#245DDA",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Image
          src="/images/poweroff.png"
          alt="power off button"
          text="Turn Off Computer"
          textColor="#fff"
        />
      </div>
    </div>
  );
};

export default Menu;
