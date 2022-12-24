import React from "react";
import styled from "styled-components";

const ProductInfoButtonList = ({ showInfo, setShowInfo }) => {
  return (
    <>
      <Container>
        <Button
          onClick={() => {
            setShowInfo(1);
          }}
        >
          상품정보
        </Button>
        <Button
          onClick={() => {
            setShowInfo(2);
          }}
        >
          상품후기
        </Button>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Button = styled.button`
  flex: 1;
  font-size: 0.4rem;
  padding: 0.5rem;
  background: none;
  border-top: 1px solid var(--color-light-gray);
  border-left: 1px solid var(--color-light-gray);
  border-right: 1px solid var(--color-light-gray);
  border-bottom: 1px solid var(--color-light-gray);
  &:active,
  &:hover {
    border-top: 2px solid var(--color-black);
    border-bottom: none;
  }
`;

export default ProductInfoButtonList;
