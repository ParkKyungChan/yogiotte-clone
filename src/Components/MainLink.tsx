import React from "react";
import styled from "styled-components";
import MainLinkButton from "./MainLinkButton";
import {MAIN_LINK_IMAGES} from "../constants";

function MainLink() {
  return (
    <LinkContainer>
      {Object.entries(MAIN_LINK_IMAGES).map(([imgUrl, title]) => {
        return (
          <li>
            <MainLinkButton imgUrl={title} title={imgUrl}></MainLinkButton>
          </li>
        );
      })}
    </LinkContainer>
  );
}

export default MainLink;

const LinkContainer = styled.ul`
  width: 924px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;
