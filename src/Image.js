import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { src, alt, text, textColor } = props;

  const Container = styled.div`
    display: flex;
    align-items: center;
    color: ${textColor};
    cursor: pointer;
    &:hover {
      background-color: #275199;
    }
  `;

  return (
    <Container>
      <img src={src} alt={alt} style={{ padding: "10px" }} />
      <span style={{ paddingRight: "10px" }}>{text}</span>
    </Container>
  );
};

export default Image;
