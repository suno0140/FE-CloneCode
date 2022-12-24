import React from "react";
import styled from "styled-components";
import ClickBox from "./ClickBox";

const ProductListFooter = () => {
  return (
    <Container>
      <ClickBox text="<<" borderBottom="none" />
      <ClickBox text="<" borderBottom="none" />
      <ClickBox text="1" />
      <ClickBox text="2" />
      <ClickBox text="3" />
      <ClickBox text=">" borderBottom="none" />
      <ClickBox text=">>" borderBottom="none" />
    </Container>
  );
};

const Container = styled.div`
  margin: 4rem 0 1.5rem 0;
  display: flex;
  justify-content: center;
`;

export default ProductListFooter;
