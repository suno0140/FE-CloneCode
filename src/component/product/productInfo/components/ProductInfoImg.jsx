import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ProductInfoImg = () => {
  const { product } = useSelector((state) => state.product);
  return (
    <Container>
      <img src={product.detailImgUrl} alt="상품 세부 설명" />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 10rem;
  display: flex;
  justify-content: center;
  img {
    width: 45rem;
  }
`;

export default ProductInfoImg;
