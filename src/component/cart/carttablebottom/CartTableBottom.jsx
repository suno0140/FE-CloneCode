import React from "react";
import styled from "styled-components";
import numeral from "numeral";
import { useSelector } from "react-redux";

const CartTableBottom = () => {
  const { cart } = useSelector((state) => state.cart);
  const sumall = cart
    .map((item) => item.summation)
    .reduce((prev, curr) => prev + curr, 0);
  return (
    <div style={{ margin: "20px 0 150px" }}>
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
        <OrderButton>주문하기</OrderButton>
      </Orderdiv>
    </div>
  );
};

export default CartTableBottom;
const Orderdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const OrderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  background-color: var(--color-black);
  font-size: 1rem;
  color: white;
  font-weight: 700;
  padding: 0.7rem;
  letter-spacing: 3px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
