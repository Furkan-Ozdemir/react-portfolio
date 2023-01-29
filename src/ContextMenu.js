import React from "react";
import styled from "styled-components";

const ContextMenu = (props) => {
  const { xPos, yPos } = props;

  const ContextWrapper = styled.div`
    position: absolute;
    left: ${xPos};
    top: ${yPos};

    background-color: tomato;
  `;

  return (
    <ContextWrapper
      onContextMenu={(e) => {
        e.preventDefault();
        console.log(xPos, yPos);
      }}
    >
      asd
    </ContextWrapper>
  );
};

export default ContextMenu;
