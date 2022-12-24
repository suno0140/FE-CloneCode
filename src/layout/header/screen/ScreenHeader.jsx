import React from "react";
import LinkButton from "../components/LinkButton";
import styled from "styled-components";
import FlexContainer from "../../../component/common/FlexContainer";

const ScreenHeader = () => {
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
      <hr />
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
  img {
    width: 5.5rem;
  }
  div {
    display: flex;
  }
`;

export default ScreenHeader;
