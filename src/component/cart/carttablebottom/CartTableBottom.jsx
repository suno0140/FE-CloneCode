import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { baseURLApiV1 } from "../../../core/api";
import { __postOrderList } from "../../../redux/modules/orderListSlice";
import numeral from "numeral";

const CartTableBottom = ({ setCartItemId, cartItemId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const { cart } = useSelector((state) => state.cart);
  const sumall = cart
    .map((item) => item.summation)
    .reduce((prev, curr) => prev + curr, 0);

  const orderlist = cart.map((cart) => {
    return { productId: cart.productId, quantity: cart.quantity };
  });

  const orderHandler = () => {
    dispatch(__postOrderList({ productList: orderlist, inCart: true })).then(
      (res) => {
        alert(res.payload.msg);
        navigate("/orderlist");
      }
    );
  };

  console.log(cartItemId);

  return (
    <div style={{ margin: "50px 0 150px" }}>
      <table style={{ fontSize: "1.3rem" }}>
        <thead style={{ color: "var(--color-gray)" }}>
          <tr>
            <th
              style={{
                margin: "0",
                width: "240px",
                padding: "15px 0",
                border: "1px solid var(--color-light-gray)",
                borderBottom: "none",
              }}
            >
              총 상품금액
            </th>
            <th
              style={{
                width: "250px",
                border: "1px solid var(--color-light-gray)",
                borderBottom: "none",
                borderLeft: "none",
              }}
            >
              총 배송비
            </th>
            <th
              style={{
                width: "720px",
                border: "1px solid var(--color-light-gray)",
                borderBottom: "none",
                borderLeft: "none",
              }}
            >
              결제예정금액
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th
              style={{
                width: "250px",
                padding: "15px 0",
                border: "1px solid var(--color-light-gray)",
              }}
            >
              {numeral(sumall).format("0,0")}
            </th>
            <th
              style={{
                width: "250px",
                border: "1px solid var(--color-light-gray)",
                borderLeft: "none",
              }}
            >
              + 0원
            </th>
            <th
              style={{
                width: "720px",
                border: "1px solid var(--color-light-gray)",
                borderLeft: "none",
              }}
            >
              = {numeral(sumall).format("0,0")}
            </th>
          </tr>
        </tbody>
      </table>
      <Orderdiv>
        {/* <OrderButton
          backgroundColor="white"
          color="var(--color-black)"
          border="1px solid #C5C5C5"
        >
          장바구니
        </OrderButton> */}
        <OrderButton
          border="1px solid var(--color-black)"
          onClick={() => {
            orderHandler();
          }}
        >
          구매하기
        </OrderButton>
      </Orderdiv>
    </div>
  );
};

const Orderdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const OrderButton = styled.button`
  display: flex;
  align-items: center;
  margin: 0.3rem;
  justify-content: center;
  width: 250px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "var(--color-black)"};
  font-size: 1rem;
  color: ${({ color }) => color || "white"};
  border: ${({ border }) => border || "none"};
  font-weight: 700;
  padding: 0.7rem;
  letter-spacing: 3px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export default CartTableBottom;
