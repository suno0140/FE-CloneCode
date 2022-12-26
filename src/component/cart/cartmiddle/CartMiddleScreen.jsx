import React from "react";
import styled from "styled-components";

const CartMiddleScreen = () => {
  return (
    <>
      <CartDivSecond>
        할인 적용 금액은 주문작성의 결제예정금액에서 확인 가능합니다.
      </CartDivSecond>
      <CartMiddleDiv>
        선택상품을
        <CartWhiteBtn1> 삭제하기</CartWhiteBtn1>
        <CartWhiteBtn2>장바구니비우기</CartWhiteBtn2>
      </CartMiddleDiv>
    </>
  );
};

export default CartMiddleScreen;
const CartMiddleDiv = styled.div`
  margin: 20px 0;
  font-size: 0.8rem;
`;
const CartDivSecond = styled.div`
  font-size: 0.7rem;
`;

const CartWhiteBtn1 = styled.button`
  padding: 5px 0;
  margin: 2px 0 2px 8px;
  width: 100px;
  height: 38px;
  background: white;
  border: 1px solid var(--color-light-gray);
  text-align: center;
  font-size: 0.9rem;
`;
const CartWhiteBtn2 = styled.button`
  padding: 5px 0;
  margin: 2px 0 0 850px;
  width: 150px;
  height: 38px;
  background: white;
  border: 1px solid var(--color-light-gray);
  text-align: center;
  font-size: 0.9rem;
`;
