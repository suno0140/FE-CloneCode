import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import numeral from "numeral";
import {
  __deleteCart,
  __upCart,
  __downCart,
} from "../../../../redux/modules/cartSlice";
import CartFootTable from "../CartFootTable";

const CartBodyTable = () => {
  const { cart } = useSelector((state) => state.cart);
  const [cartItemIdList, setCartItemId] = useState([]);
  const dispatch = useDispatch();

  const onChangeCheck = (checked, cartId) => {
    if (checked) {
      setCartItemId([...cartItemIdList, +cartId]);
    } else if (!checked) {
      setCartItemId(cartItemIdList.filter((e) => e !== +cartId));
    }
  };
  console.log(cartItemIdList);

  const onCheckDelete = () => {
    dispatch(__deleteCart({ cartItemIdList: cartItemIdList }));
  };

  const onClickDelete = (cartList) => {
    dispatch(__deleteCart({ cartItemIdList: [cartList.cartItemId] }));
  };

  const onClickUp = (cart) => {
    if (cart.quantity === 10) {
      alert("최대주문 수량은 10개입니다.");
    } else {
      dispatch(__upCart(cart));
    }
  };
  const onClickDown = (cart) => {
    if (cart.quantity === 1) {
      alert("최소주문 수량은 1개입니다.");
    } else {
      dispatch(__downCart(cart));
    }
  };

  return (
    <div>
      <tbody style={{ fontSize: "1rem" }}>
        {cart &&
          cart?.map((cartList) => (
            <tr>
              <th style={{ width: "32px" }}>
                <input
                  name="cartItemId"
                  value={cartList.cartItemId}
                  type="checkbox"
                  style={{ zoom: 1.4 }}
                  onChange={(e) => {
                    onChangeCheck(e.target.checked, e.target.value);
                  }}
                  checked={
                    cartItemIdList.includes(cartList.cartItemId) ? true : false
                  }
                ></input>
              </th>
              <th style={{ padding: "15px", width: "100px" }}>
                <img
                  style={{ boxSizing: "border-box", width: "80px" }}
                  src={cartList.thumbnailImgUrl}
                  alt="표지"
                />
              </th>
              <th style={{ textAlign: "left", width: "380px" }}>
                {cartList.name}
              </th>
              <th style={{ width: "90px" }}>
                {numeral(cartList.sellingPrice).format("0,0")}
              </th>
              <th style={{ width: "78px" }}>
                <CartDiv>
                  <CartFirstDiv>{cartList.quantity}</CartFirstDiv>
                  <CartSecondDiv>
                    <Upbutton
                      onClick={() => {
                        onClickUp(cartList);
                      }}
                    ></Upbutton>
                    <Downbutton
                      onClick={() => {
                        onClickDown(cartList);
                      }}
                    ></Downbutton>
                  </CartSecondDiv>
                </CartDiv>
              </th>
              <th style={{ width: "94px" }}>-</th>
              <th
                style={{ width: "94px", fontSize: "0.8rem", color: "#a09494" }}
              >
                기본배송
              </th>
              <th
                style={{ width: "82px", fontSize: "0.8rem", color: "#a09494" }}
              >
                무료
              </th>
              <th style={{ width: "98px" }}>
                {numeral(cartList.summation).format("0,0")}
              </th>
              <th style={{ width: "110px" }}>
                <button
                  value={cartList.cartItemId}
                  style={{
                    padding: "5px 0",
                    margin: "2px 0",
                    width: "100px",
                    height: "33px",
                    background: "#fff",
                    border: "1px solid #ddd",
                    textAlign: "center",
                    fontSize: "0.78rem",
                    fontWeight: "300",
                  }}
                  onClick={() => {
                    onClickDelete(cartList);
                  }}
                >
                  삭제
                </button>
              </th>
            </tr>
          ))}
      </tbody>
      <CartFootTable />
      <CartDivSecond>
        할인 적용 금액은 주문작성의 결제예정금액에서 확인 가능합니다.
      </CartDivSecond>
      <CartMiddleDiv>
        선택상품을
        <CartWhiteBtn1
          onClick={(e) => {
            onCheckDelete(e);
          }}
        >
          삭제하기
        </CartWhiteBtn1>
      </CartMiddleDiv>
    </div>
  );
};

export default CartBodyTable;

const Upbutton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 11px;
  background-image: url("http://img.echosting.cafe24.com/skin/base_ko_KR/product/btn_count_up.gif");
  background-position: 17px;
  border: 1px solid var(--color-gray);
`;

const Downbutton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 11px;
  background-image: url("http://img.echosting.cafe24.com/skin/base_ko_KR/product/btn_count_down.gif");
  background-position: 17px;
  border: 1px solid var(--color-gray);
`;
const CartDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CartFirstDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-gray);
  font-size: 0.8rem;
  font-weight: 300;
  width: 15px;
  height: 20px;
`;

const CartSecondDiv = styled.div`
  display: flex;
  text-align: center;
  justify-content: end;
  flex-direction: column;
  width: 10px;
`;

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
