import React from "react";
import styled from "styled-components";
import ClickBox from "./ClickBox";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductListFooter = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const subcategory = searchParams.get("subcategory");
  const page = searchParams.get("page");

  const pageList = useSelector((state) => state.productList.pageList);
  const totalPage = useSelector((state) => state.productList.totalPage);

  return (
    <Container>
      <ClickBox
        text="<<"
        borderBottom="none"
        onClick={() => {
          category && navigate(`/product/list?category=${category}&page=1`);
          subcategory &&
            navigate(`/product/list?subcategory=${subcategory}&page=1`);
        }}
      />
      <ClickBox
        text="<"
        borderBottom="none"
        onClick={() => {
          category &&
            (page > 1
              ? navigate(`/product/list?category=${category}&page=${page - 1}`)
              : navigate(`/product/list?category=${category}&page=1`));
          subcategory &&
            (page > 1
              ? navigate(
                  `/product/list?subcategory=${subcategory}&page=${page - 1}`
                )
              : navigate(`/product/list?subcategory=${subcategory}&page=1`));
        }}
      />
      {pageList.map((pageId) => (
        <ClickBox
          key={pageId}
          text={pageId}
          isPageHere={pageId === page}
          onClick={() => {
            category &&
              navigate(`/product/list?category=${category}&page=${pageId}`);
            subcategory &&
              navigate(
                `/product/list?subcategory=${subcategory}&page=${pageId}`
              );
          }}
        />
      ))}
      <ClickBox
        text=">"
        borderBottom="none"
        onClick={() => {
          category &&
            (page < totalPage
              ? navigate(`/product/list?category=${category}&page=${+page + 1}`)
              : navigate(
                  `/product/list?category=${category}&page=${totalPage}`
                ));
          subcategory &&
            (page < totalPage
              ? navigate(
                  `/product/list?subcategory=${subcategory}&page=${+page + 1}`
                )
              : navigate(
                  `/product/list?subcategory=${subcategory}&page=${totalPage}`
                ));
        }}
      />
      <ClickBox
        text=">>"
        borderBottom="none"
        onClick={() => {
          category &&
            navigate(`/product/list?category=${category}&page=${totalPage}`);
          subcategory &&
            navigate(
              `/product/list?subcategory=${subcategory}&page=${totalPage}`
            );
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  margin: 4rem 0 1.5rem 0;
  display: flex;
  justify-content: center;
`;

export default ProductListFooter;
