import React from "react";
import styled from "styled-components";
import ItemScreen from "../../../common/item/ItemScreen";

const MainItemListScreen = () => {
  return (
    <Container>
      <h3>NEW ITEMS</h3>
      <p></p>
      <h5>재주상회에서 소개하는 새로운 제품들 입니다.</h5>
      <div>
        <ItemScreen />
        <ItemScreen />
        <ItemScreen />
        <ItemScreen />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.8rem;
  margin-bottom: 10rem;
  h3 {
    font-size: 1.3rem;
    font-weight: 400;
    margin-bottom: 0.8rem;
  }
  p {
    margin: 0;
    height: 1px;
    width: 1.5rem;
    display: block;
    background: var(--color-black);
  }
  h5 {
    font-weight: 500;
    color: var(--color-gray);
  }
  div {
    display: flex;
    justify-content: center;
  }
`;

export default MainItemListScreen;
