import React, { useState } from "react";
import LinkButton from "../components/LinkButton";
import styled from "styled-components";
import useScrollPosition from "../../../hooks/useScrollPosition";
import { justFadeInAnimation } from "../../../styles/animations";
import { useNavigate } from "react-router-dom";

const HeaderScreen = () => {
  const scrollPosition = useScrollPosition();
  const navigate = useNavigate();
  return (
    <Container>
      {scrollPosition <= 36 && (
        <HeaderContainerFirst>
          <div>
            <LinkButton linkName="COMMUNITY" />
          </div>
          <img
            src="http://iiinjeju.com/_dj/img/logo.jpg"
            alt="iiin 로고"
            onClick={() => {
              navigate("/");
            }}
          />
          <div>
            <LinkButton
              linkName="LOGIN"
              margin="0.1rem 1.8rem"
              linkTo="/login"
            />
            <LinkButton linkName="JOIN" linkTo="/signup" />
          </div>
        </HeaderContainerFirst>
      )}
      <HeaderContainerSecond>
        {scrollPosition > 36 && (
          <img
            src="http://iiinjeju.com/_dj/img/logo.jpg"
            alt="iiin 로고"
            onClick={() => {
              navigate("/");
            }}
          />
        )}
        <LinkButton
          linkName="MAGAZINE"
          fontsize={scrollPosition <= 36 ? "1rem" : "0.8rem"}
          margin={scrollPosition <= 36 ? "1rem 4rem" : "0.4rem 1.5rem"}
          linkTo="/product/list?category=magazine&page=1"
          isHoverNeed={true}
        />
        <LinkButton
          linkName="SHOP"
          fontsize={scrollPosition <= 36 ? "1rem" : "0.8rem"}
          margin={scrollPosition <= 36 ? "1rem 4rem" : "0.4rem 1.5rem"}
          linkTo="/product/list?category=shop&page=1"
          isHoverNeed={true}
        />
      </HeaderContainerSecond>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  z-index: 3;
`;

const HeaderContainerFirst = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;

  width: 100%;
  min-width: 800px;
  max-width: 1200px;

  border-bottom: 2px solid var(--color-black);
  background: white;
  img {
    width: 6.5rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    ${justFadeInAnimation};
  }
  div {
    display: flex;
  }
`;

const HeaderContainerSecond = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--color-black);
  padding: 0 1.5rem;
  min-width: 800px;
  max-width: 1200px;
  background: white;

  img {
    width: 2rem;
    position: absolute;
    left: 5rem;
    ${justFadeInAnimation}
    cursor: pointer;
  }
`;

export default HeaderScreen;
