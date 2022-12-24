import React from "react";
import styled from "styled-components";
import ItemScreen from "../../../common/item/ItemScreen";

const ProductListGridScreen = () => {
  return (
    <Container>
      <ItemScreen />
      <ItemScreen />
      <ItemScreen />
      <ItemScreen />
      <ItemScreen />
      <ItemScreen />
      <ItemScreen />
      <ItemScreen />
      <ItemScreen />
      <ItemScreen />
      <ItemScreen />
      <ItemScreen />
      <ItemScreen />
      <ItemScreen />
      <ItemScreen />
      <ItemScreen />
      <ItemScreen />
      <ItemScreen />
      <ItemScreen />
      <ItemScreen />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export default ProductListGridScreen;
