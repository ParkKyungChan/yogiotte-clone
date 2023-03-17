import React from "react";
import styled from "styled-components";
import MainLink from "../Components/MainLink";

function MainPage() {
  return (
    <MainContainer>
      <MainBanner></MainBanner>
      <MainLink></MainLink>
    </MainContainer>
  );
}

export default MainPage;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MainBanner = styled.div`
  width: 100%;
  height: 580px;
  background: #fff url("//image.goodchoice.kr/images/web_v3/mainspot_230301.png") 50% 100% no-repeat;
  background-size: 924px auto;
  cursor: pointer;
`;
