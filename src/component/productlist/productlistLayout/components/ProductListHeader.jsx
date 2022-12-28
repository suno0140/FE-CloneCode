import React from "react";
import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SubCategory from "./SubCategory";
import { fadeInFromLeftAnimation } from "../../../../styles/animations";

const ProductListHeader = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const subcategory = searchParams.get("subcategory");
  const navigate = useNavigate();
  const subCategoryList = useSelector(
    (state) => state.productList.subCategoryList
  );

  return (
    <Container>
      <MainCategory>
        {category?.toUpperCase()}
        {subcategory?.toUpperCase()}
      </MainCategory>
      <div>
        {subCategoryList.map((subcategory) => (
          <SubCategory
            key={subcategory}
            subcategory={subcategory}
            onClick={() => {
              navigate(`/product/list?subcategory=${subcategory}&page=1`);
            }}
          />
        ))}
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
  ${fadeInFromLeftAnimation}
`;

export default React.memo(ProductListHeader);
