import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import numeral from "numeral";
import { __deleteCart } from "../../../../redux/modules/cartSlice";

const CartBodyTable = () => {
  const { cart } = useSelector((state) => state.cart);
  const [cartItemId, setCartItemId] = useState([]);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const onChangeCheck = () => {};
  const onClickDelete = () => {
    dispatch(__deleteCart());
  };

  const onClickUp = () => {
    if (count < 10) {
      setCount((count) => count + 1);
    } else {
      alert("최대주문 수량입니다.");
    }
  };
  const onClickDown = () => {
    if (count > 1) {
      setCount((count) => count - 1);
    } else {
      alert("최소주문 수량은 1개 입니다.");
    }
  };

  return (
    <div style={{ borderBottom: "1px solid #e1e1e1" }}>
      <tbody style={{ fontSize: "1rem" }}>
        {cart?.map((cartList) => (
          <tr>
            <th style={{ width: "32px" }}>
              <input
                name="cartItemId"
                value={cartList.cartItemId}
                type="checkbox"
                style={{ zoom: 1.4 }}
                onChange={() => {
                  onChangeCheck();
                }}
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
                    onClick={(count) => {
                      onClickUp(count);
                    }}
                  ></Upbutton>
                  <Downbutton
                    onClick={(count) => {
                      onClickDown(count);
                    }}
                  ></Downbutton>
                </CartSecondDiv>
              </CartDiv>
            </th>
            <th style={{ width: "94px" }}>-</th>
            <th style={{ width: "94px", fontSize: "0.8rem", color: "#a09494" }}>
              기본배송
            </th>
            <th style={{ width: "82px", fontSize: "0.8rem", color: "#a09494" }}>
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
                  onClickDelete();
                }}
              >
                삭제
              </button>
            </th>
          </tr>
        ))}
      </tbody>
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
