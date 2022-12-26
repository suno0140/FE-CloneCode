import React from "react";

const CartBodyTable = () => {
  return (
    <div style={{ borderBottom: "1px solid #e1e1e1" }}>
      <colgroup>
        <col style={{ width: "32px" }}></col>
        <col style={{ width: "100px" }}></col>
        <col style={{ width: "400px" }}></col>
        <col style={{ width: "100px" }}></col>
        <col style={{ width: "78px" }}></col>
        <col style={{ width: "98px" }}></col>
        <col style={{ width: "98px" }}></col>
        <col style={{ width: "85px" }}></col>
        <col style={{ width: "98px" }}></col>
        <col style={{ width: "110px" }}></col>
      </colgroup>
      <tbody style={{ fontSize: "1rem" }}>
        <tr>
          <th scope="col">
            <input type="checkbox" style={{ zoom: 1.4 }}></input>
          </th>
          <th scope="col" style={{ padding: "15px" }}>
            <img
              style={{ boxSizing: "border-box", width: "80px" }}
              src="http://iiinjeju.com/web/product/tiny/202209/177fdc866540c1c9dfc715dfc1171dd2.jpg"
            />
          </th>
          <th scope="col">[문신기X정명국 에디션] 노인과 바다</th>
          <th scope="col">290,000원</th>
          <th scope="col">수량</th>
          <th scope="col">-</th>
          <th scope="col" style={{ fontSize: "0.8rem", color: "#a09494" }}>
            기본배송
          </th>
          <th scope="col" style={{ fontSize: "0.8rem", color: "#a09494" }}>
            무료
          </th>
          <th scope="col">290,000원</th>
          <th scope="col">
            <button
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
            >
              삭제
            </button>
          </th>
        </tr>
      </tbody>
    </div>
  );
};

export default CartBodyTable;
