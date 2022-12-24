import React from "react";
import LinkButton from "../components/LinkButton";
import styled from "styled-components";
import FlexContainer from "../../../component/common/FlexContainer";

const HeaderScreen = () => {
  return (
    <FlexContainer>
      <HeaderContainerFirst>
        <div>
          <LinkButton linkName="COMMUNITY" />
        </div>
        <img src="http://iiinjeju.com/_dj/img/logo.jpg" alt="iiin 로고" />
        <div>
          <LinkButton linkName="LOGIN" />
          <LinkButton linkName="JOIN" />
        </div>
      </HeaderContainerFirst>
      <HeaderContainerSecond>
        <LinkButton linkName="MARGZINE" fontsize="1rem" margin="1rem" />
        <LinkButton linkName="SHOP" fontsize="1rem" margin="1rem" />
      </HeaderContainerSecond>
    </FlexContainer>
  );
};

const HeaderContainerFirst = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 0.9rem;
  min-width: 800px;
  max-width: 1200px;
  border-bottom: 2px solid var(--color-black);
  img {
    width: 5.5rem;
  }
  div {
    display: flex;
  }
`;

const HeaderContainerSecond = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--color-black);
  padding: 0 0.9rem;
  min-width: 800px;
  max-width: 1200px;
`;

export default HeaderScreen;
