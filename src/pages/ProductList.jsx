import React from "react";
import styled from "styled-components";
import ProductListGridScreen from "../component/productlist/productListGrid/screen/ProductListGridScreen";
import ProductListFooter from "../component/productlist/productlistLayout/components/ProductListFooter";
import ProductListHeader from "../component/productlist/productlistLayout/components/ProductListHeader";

const ProductList = () => {
  return (
    <Container>
      <ProductListHeader />
      <ProductListGridScreen />
      <ProductListFooter />
    </Container>
  );
};

const Container = styled.div`
  padding: 5rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default React.memo(ProductList);
