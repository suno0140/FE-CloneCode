import React from "react";
import styled from "styled-components";
import { fadeInFromLeftAnimation } from "../../../../styles/animations";

const OrderListHeaderScreen = () => {
  return (
    <Container>
      <MainCategory>ORDER</MainCategory>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    margin-top: 1.8rem;
  }
`;

const MainCategory = styled.h2`
  font-weight: 500;
  margin: 0;
  ${fadeInFromLeftAnimation}
`;

export default OrderListHeaderScreen;
