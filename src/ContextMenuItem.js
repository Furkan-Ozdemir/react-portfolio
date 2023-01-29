import React from "react";
import Image from "./Image";
import styled from "styled-components";

const ContextMenuItem = ({ isResume }) => {
  const ContextMenuItem = styled.div`
    display: flex;
    width: 230px;
  `;
  const UnorderedListItem = styled.li`
    list-style: none;
    width: 100%;
    padding: 7px;
    padding-left: 35px;
    &:hover {
      background-color: #275199;
      color: #fff;
    }
    &[data-disabled="true"] {
      pointer-events: none;
      opacity: 0.6;
    }
    &[data-exception="winrar"] {
      padding: 0px;
    }
  `;
  const UnorderedList = styled.ul`
    width: 100%;
  `;

  return (
    <ContextMenuItem>
      <UnorderedList>
        {isResume && (
          <UnorderedListItem>
            <a href="/images/Furkan_Resume.pdf" download>
              Download
            </a>
          </UnorderedListItem>
        )}
        <hr />
        <UnorderedListItem
          onClick={() => {
            window.location.reload();
          }}
        >
          Refresh
        </UnorderedListItem>
        <hr />
        <UnorderedListItem data-disabled={true}>Paste</UnorderedListItem>
        <UnorderedListItem data-disabled={true}>
          Paste Shortcut
        </UnorderedListItem>
        <UnorderedListItem>Undo</UnorderedListItem>
        <UnorderedListItem data-exception="winrar">
          <Image
            src="/images/winrarSmall.png"
            alt="winrar"
            text="Extract Here"
          />
        </UnorderedListItem>
        <UnorderedListItem data-exception="winrar">
          <Image
            src="/images/winrarSmall.png"
            alt="winrar"
            text="Extract files..."
          />
        </UnorderedListItem>
        <hr />
        <UnorderedListItem>New</UnorderedListItem>
        <UnorderedListItem>Properties</UnorderedListItem>
      </UnorderedList>
    </ContextMenuItem>
  );
};

export default ContextMenuItem;
