import React from "react";
import styled from "styled-components";
import NewsLink from "./NewsLink";
import {NEWS_LINKS} from "../constants";

function NewsSection() {
  return (
    <>
      <NewSectionContainer>
        <NewsSectionTitle>여기어때 소식</NewsSectionTitle>
        <NewsItems>
          {NEWS_LINKS.map(({imgSrc, title, content}) => {
            return <NewsLink imgSrc={imgSrc} title={title} content={content} />;
          })}
        </NewsItems>
      </NewSectionContainer>
    </>
  );
}

export default NewsSection;

const NewsSectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 35px;
`;

const NewSectionContainer = styled.div`
  width: 978px;
  margin: 50px auto;
`;

const NewsItems = styled.div`
  display: flex;
  gap: 10px;
`;
