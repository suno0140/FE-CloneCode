import React from "react";
import styled from "styled-components";
import MainCarouselScreen from "../component/main/mainCarousel/screen/MainCarouselScreen";

const Main = () => {
  return (
    <Container>
      <MainCarouselScreen />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default Main;
