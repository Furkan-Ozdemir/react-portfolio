import React from "react";
import styled from "styled-components";
import ContextMenuItem from "./ContextMenuItem";

const ContextMenu = (props) => {
  const { xPos, yPos, isResume } = props;

  const ContextWrapper = styled.div`
    position: absolute;
    left: ${xPos};
    top: ${yPos};
    background-color: #fff;
    border: 1px solid #808080;
  `;

  return (
    <ContextWrapper
      onContextMenu={(e) => {
        e.preventDefault();
        console.log(xPos, yPos);
      }}
    >
      <ContextMenuItem isResume={isResume} />
    </ContextWrapper>
  );
};

export default ContextMenu;
