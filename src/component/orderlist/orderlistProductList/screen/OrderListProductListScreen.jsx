import React from "react";
import styled from "styled-components";
import OrderProductListTable from "../components/OrderProductListTable";

const OrderListProductListScreen = () => {
  return (
    <Container>
      <h3>주문 상품 정보</h3>
      <OrderProductListTable />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 5rem;
  h3 {
    margin-left: 1rem;
    font-weight: 400;
    font-size: 1rem;
  }
`;

export default OrderListProductListScreen;
