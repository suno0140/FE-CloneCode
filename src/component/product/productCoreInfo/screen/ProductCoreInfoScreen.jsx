import React from "react";
import styled from "styled-components";
import ProductCoreInfoTextBox from "../components/ProductCoreInfoTextBox";
import { useSelector } from "react-redux";

const ProductCoreInfoScreen = () => {
  const { product } = useSelector((state) => state.product);
  return (
    <Container>
      <img src={product.thumbnailImgUrl} alt="표지" />
      <ProductCoreInfoTextBox />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin: 4rem;
  img {
    width: 25rem;
  }
`;

export default ProductCoreInfoScreen;
