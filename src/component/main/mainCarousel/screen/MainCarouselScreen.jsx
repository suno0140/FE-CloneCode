import React from "react";
import styled from "styled-components";

const MainCarouselScreen = () => {
  return (
    <Container>
      <img
        src="http://iiinjeju.com/_dj/img/main/%EC%82%AC%EB%B3%B8%20-22%EA%B0%80%EC%9D%84%20%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%20%EB%B0%B0%EB%84%88%20%EB%B3%B5%EC%82%AC.png"
        alt="우리 잔칫날"
      />
    </Container>
  );
};

const Container = styled.div`
  img {
    width: 77rem;
  }
`;

export default MainCarouselScreen;
