import React from "react";
import styled from "styled-components";
import OrderListHeaderScreen from "../component/orderlist/orderlistHeader/screen/OrderListHeaderScreen";
import OrderListProductListScreen from "../component/orderlist/orderlistProductList/screen/OrderListProductListScreen";

const OrderList = () => {
  return (
    <Container>
      <OrderListHeaderScreen />
      <OrderListProductListScreen />
    </Container>
  );
};
const Container = styled.div`
  padding: 5rem 4rem;
  width: 100%;
`;

export default OrderList;
