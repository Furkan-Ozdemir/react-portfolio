import React from "react";
import styled from "styled-components";
import ContextMenuItem from "./ContextMenuItem";

const ContextMenu = (props) => {
  const { xPos, yPos, isResume } = props;

  return (
    <ContextWrapper
      xPos={xPos}
      yPos={yPos}
      onContextMenu={(e) => {
        e.preventDefault();
        console.log(xPos, yPos);
      }}
    >
      <ContextMenuItem isResume={isResume} />
    </ContextWrapper>
  );
};
const ContextWrapper = styled.div`
  position: absolute;
  left: ${(props) => props.xPos};
  top: ${(props) => props.yPos};
  background-color: #fff;
  border: 1px solid #808080;
  z-index: 9999;
`;

export default ContextMenu;
