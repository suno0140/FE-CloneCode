import React from "react";
import styled from "styled-components";

const ProductInfoImg = () => {
  return (
    <Container>
      <img
        src="http://iiinjeju.com/web/upload/NNEditor/20220902/7a9ffe7747531606e2993b0e8f388238.jpg"
        alt="상품 세부 설명"
      />
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
