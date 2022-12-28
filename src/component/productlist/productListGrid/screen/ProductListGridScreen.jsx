import React from "react";
import styled from "styled-components";
import GetProduct from "../components/GetProduct";

const ProductListGridScreen = () => {
  return (
    <Container>
      <GetProduct />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export default React.memo(ProductListGridScreen);
