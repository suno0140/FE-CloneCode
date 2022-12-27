import React from "react";
import styled from "styled-components";
import Carousel from "../components/Carousel";

const MainCarouselScreen = () => {
  return (
    <Container>
      <Carousel />
    </Container>
  );
};

const Container = styled.div`
  /* z-index: -1; */
  img {
    width: 78rem;
  }
`;

export default MainCarouselScreen;
