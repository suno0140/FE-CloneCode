import React from "react";
import styled from "styled-components";
import SubCategory from "./SubCategory";

const ProductListHeader = () => {
  return (
    <Container>
      <MainCategory>FOOD</MainCategory>
      <div>
        <SubCategory />
        <SubCategory />
        <SubCategory />
        <SubCategory />
        <SubCategory />
      </div>
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
`;

export default ProductListHeader;
