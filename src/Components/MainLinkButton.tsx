import React from "react";
import styled from "styled-components";

interface MainLinkButtonProps {
  imgUrl: string;
  title: string;
}

function MainLinkButton({imgUrl, title}: MainLinkButtonProps) {
  return (
    <LinkBox>
      <LinkIcon imgUrl={imgUrl}></LinkIcon>
      <LinkTitle>{title}</LinkTitle>
    </LinkBox>
  );
}

export default MainLinkButton;

const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const LinkIcon = styled.div<{
  imgUrl: string;
}>`
  width: 72px;
  height: 72px;
  background: url(${props => props.imgUrl}) no-repeat;
  background-size: 72px auto;
`;

const LinkTitle = styled.span`
  font-family: "Pretendard";
  font-size: 18px;
  color: rgba(0, 0, 0, 0.56);
`;
