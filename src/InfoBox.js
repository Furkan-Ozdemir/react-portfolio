import React from "react";
import styled from "styled-components";
import Image from "./Image";

const InfoBox = (props) => {
  const { isSucces, setInfoBoxVisible, isLoading } = props;

  return (
    <FolderWrapper id="infoBox">
      <TitleBar>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ height: "25px", margin: "4px" }}
            src="/images/warningSign.png"
            alt="warning icon"
          />
          <span style={{ color: "#fff", paddingLeft: "5px" }}>Warning</span>
        </div>
        <img
          style={{
            cursor: "pointer",
            border: "1px solid #fff",
            borderRadius: "50%",
          }}
          src="/images/closeIcon.png"
          alt="close icon"
          onClick={() => {
            setInfoBoxVisible(false);
          }}
        />
      </TitleBar>
      <InfoBoxContent>
        <NoHover>
          {isLoading && (
            <Image src="/images/warningSign.png" alt="" text="Loading..." />
          )}
          {!isLoading && (
            <Image
              src={
                isSucces === true
                  ? "/images/successSign.png"
                  : "/images/warningSign.png"
              }
              alt="warning icon"
              text={
                isSucces === true
                  ? "Email sent successfully"
                  : "Email not sent try again later!"
              }
            />
          )}
        </NoHover>
      </InfoBoxContent>
    </FolderWrapper>
  );
};
const NoHover = styled.div`
  & > *:hover {
    background-color: transparent !important;
    color: #000 !important;
    cursor: default !important;
  }
`;

const TitleBar = styled.div`
  height: 30px;
  background-color: #005bf2;
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
`;
const FolderWrapper = styled.div`
  display: block;
  height: 100px;
  width: 350px;
  border: 3px solid #005bf2;
  position: absolute;
  left: 0;
  right: 0;
  top: 50px;
  margin-left: auto;
  margin-right: auto;
  z-index: 101;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const InfoBoxContent = styled.div`
  background-color: #efedd8;
  height: 65px;
`;

export default InfoBox;
