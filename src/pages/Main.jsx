import React from "react";
import styled from "styled-components";
import MainCarouselScreen from "../component/main/mainCarousel/screen/MainCarouselScreen";
import MainItemListScreen from "../component/main/mainItemList/screen/MainItemListScreen";

const Main = () => {
  return (
    <Container>
      <MainCarouselScreen />
      <MainItemListScreen />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default React.memo(Main);
