import React, {useState} from "react";
import styled from "styled-components";

function GNB() {
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const handleSearchButtonClick = () => {
    setIsSearchBarActive(true);
    setTimeout(() => {
      setIsInputVisible(true);
    }, 500);
  };
  const handleCloseButtonClick = () => {
    setIsSearchBarActive(false);
    setIsInputVisible(false);
  };
  return (
    <GNBContainer>
      <GNBSection>
        <GNBLogo></GNBLogo>
        <GNBSearchButton isActive={isSearchBarActive} onClick={handleSearchButtonClick} />
        <GNBSearchInput placeholder="지역, 숙소명" isActive={isInputVisible}></GNBSearchInput>
        <CloseButton isActive={isInputVisible} onClick={handleCloseButtonClick}></CloseButton>
        <GNBMenuLists isActive={isSearchBarActive}>
          <GNBMenu>
            <GNBMenuSpan>내주변</GNBMenuSpan>
          </GNBMenu>
          <GNBMenu>
            <GNBMenuSpan>예약내역</GNBMenuSpan>
          </GNBMenu>
          <GNBMenu>
            <GNBMenuSpan>더보기</GNBMenuSpan>
          </GNBMenu>
          <GNBMenu>
            <GNBMenuSpan>로그인</GNBMenuSpan>
          </GNBMenu>
        </GNBMenuLists>
      </GNBSection>
    </GNBContainer>
  );
}

export default GNB;

const GNBContainer = styled.header`
  width: 100%;
  height: 4.5rem;
  position: fixed;
  background-color: var(--color-main-red);
`;

const GNBSection = styled.section`
  width: 64rem;
  height: 4.5rem;
  margin: 0 auto;
  position: relative;
  background: none;
  display: flex;
  align-items: center;
`;

const GNBLogo = styled.h1`
  width: 6rem;
  height: 1.25rem;
  background: url("//image.goodchoice.kr/images/web_v3/h1_logo_pc_w.png") 0 0 no-repeat;
`;

const GNBSearchButton = styled.button<{
  isActive: boolean;
}>`
  width: 30px;
  height: 30px;
  border: none;
  position: absolute;
  text-indent: -9999px;
  right: ${props => (props.isActive ? "800px" : "376px")};
  background: url(//image.goodchoice.kr/images/web_v3/ico_srch_2.png) 50% 50% no-repeat;
  background-size: 24px auto;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 6;
`;

const GNBMenuLists = styled.ul<{
  isActive: boolean;
}>`
  position: absolute;
  display: ${props => (props.isActive ? "none" : "flex")};
  right: 30px;
  list-style: none;
  z-index: 5;
`;

const GNBMenu = styled.li`
  margin-left: 30px;
`;

const GNBMenuSpan = styled.span`
  font-family: "Pretendard";
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const GNBSearchInput = styled.input<{
  isActive: boolean;
}>`
  width: 725px;
  height: 21px;
  font-size: 18px;
  position: absolute;
  background: none;
  border: none;
  right: 60px;
  width: ${props => (props.isActive ? "725px" : "0px")};
  display: ${props => (props.isActive ? "block " : "none")};
  caret-color: white;
  outline: 0;
  transition: all 0.3s;
  ::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const CloseButton = styled.button<{
  isActive: boolean;
}>`
  width: 35px;
  height: 35px;
  background: url("//image.goodchoice.kr/images/web_v3/ico_close_2.png") 50% 50% no-repeat;
  background-size: 24px auto;
  border: none;
  position: absolute;
  right: 50px;
  display: ${props => (props.isActive ? "block " : "none")};
  cursor: pointer;
`;
