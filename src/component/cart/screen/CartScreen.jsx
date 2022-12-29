import React from "react";
import styled from "styled-components";
import CartTableBottom from "../carttablebottom/CartTableBottom";
import CartBodyTable from "../carttabletop/CartBody/CartBodyTable";
import CartFootTable from "../carttabletop/CartFootTable";
import CartHeadTable from "../carttabletop/CartHeadTable";

const CartPage = () => {
  return (
    <div>
      <CartContainer>
        <CartMainDiv>CART</CartMainDiv>
      </CartContainer>
      <CartDivbox>
        <CartDivSecond>국내배송상품</CartDivSecond>
      </CartDivbox>
      <CartDivThird>일반상품</CartDivThird>
      <div>
        <table>
          <CartHeadTable />
          <CartBodyTable />
        </table>
      </div>
      <CartTableBottom />
    </div>
  );
};

export default CartPage;

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 1200px;
  margin-top: 60px;
`;

const CartMainDiv = styled.div`
  font-size: 1.9rem;
  font-weight: lighter;
`;

const CartDivbox = styled.div`
  border-bottom: 1px solid var(--color-light-gray);
`;

const CartDivSecond = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-light-gray);
  border-bottom: none;
  width: 130px;
  margin-top: 50px;
  padding: 13px 20px 13px 20px;
  font-weight: bold;
  font-size: 0.8rem;
`;

const CartDivThird = styled.div`
  margin-top: 20px;
  padding-bottom: 11px;
  border-bottom: 1px solid var(--color-light-gray);
  font-weight: bold;
`;
