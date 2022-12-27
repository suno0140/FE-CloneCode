import React from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import SubCategory from "./SubCategory";

const ProductListHeader = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  return (
    <Container>
      <MainCategory>{category.toUpperCase()}</MainCategory>
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
