import React from "react";
import styled from "styled-components";
import ProductCoreInfoTextBox from "../components/ProductCoreInfoTextBox";

const ProductCoreInfoScreen = () => {
  return (
    <Container>
      <img
        src="http://iiinjeju.com/web/product/big/202209/8aa3aa6a1eeb0373cda71d27e568a7ee.jpg"
        alt="표지"
      />
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
