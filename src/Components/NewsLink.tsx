import React from "react";
import styled from "styled-components";

interface NewsLinkProps {
  imgSrc: string;
  title: string;
  content: string;
}

function NewsLink({imgSrc, title, content}: NewsLinkProps) {
  return (
    <NewsLinkContainer>
      <img src={imgSrc} />
      <NewsLinkContentsBox>
        <NewsLinkTitle>{title}</NewsLinkTitle>
        <NewsLinkContent>{content}</NewsLinkContent>
      </NewsLinkContentsBox>
    </NewsLinkContainer>
  );
}

export default NewsLink;

const NewsLinkContainer = styled.div`
  display: flex;
  width: 473px;
  height: 162px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  cursor: pointer;
`;

const NewsLinkContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 38px;
`;

const NewsLinkTitle = styled.strong`
  color: rgb(0, 121, 107);
  font-size: 20px;
`;

const NewsLinkContent = styled.span`
  color: rgba(0, 0, 0, 0.56);
`;
