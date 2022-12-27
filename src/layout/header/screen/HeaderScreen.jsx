import React from "react";
import styled from "styled-components";
import useScrollPosition from "../../../hooks/useScrollPosition";
import HeaderFirst from "../components/HeaderFirst";
import HeaderSecond from "../components/HeaderSecond";

const HeaderScreen = () => {
  const scrollPosition = useScrollPosition();
  return (
    <Container>
      {scrollPosition <= 36 && <HeaderFirst />}
      <HeaderSecond />
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

export default HeaderScreen;
