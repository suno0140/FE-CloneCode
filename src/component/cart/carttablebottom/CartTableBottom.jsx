import React from "react";
import styled from "styled-components";

const CartTableBottom = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <table style={{ fontSize: "1.3rem" }}>
        <thead style={{ color: "#6e6868" }}>
          <tr>
            <th
              style={{
                margin: "0",
                width: "240px",
                padding: "15px 0",
                border: "1px solid #e1e1e1",

                borderBottom: "none",
              }}
            >
              총 상품금액
            </th>
            <th
              style={{
                width: "250px",
                border: "1px solid #e1e1e1",
                borderLeft: "none",
                borderBottom: "none",
              }}
            >
              총 배송비
            </th>
            <th
              style={{
                width: "720px",
                border: "1px solid #e1e1e1",
                borderLeft: "none",
                borderBottom: "none",
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
                border: "1px solid #e1e1e1",
              }}
            >
              290,000원
            </th>
            <th
              style={{
                width: "250px",
                border: "1px solid #e1e1e1",
                borderLeft: "none",
              }}
            >
              + 0원
            </th>
            <th
              style={{
                width: "720px",
                border: "1px solid #e1e1e1",
                borderLeft: "none",
              }}
            >
              = 290,000원
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartTableBottom;
