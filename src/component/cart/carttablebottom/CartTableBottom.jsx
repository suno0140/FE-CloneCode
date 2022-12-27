import React from "react";

const CartTableBottom = () => {
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
              290,000원
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
              = 290,000원
            </th>
          </tr>
        </tbody>
      </table>
      <button>주문하기</button>
    </div>
  );
};

export default CartTableBottom;
