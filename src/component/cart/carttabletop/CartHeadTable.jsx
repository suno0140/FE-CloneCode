import React from "react";

const CartHeadTable = () => {
  return (
    <div
      style={{
        color: "var(--color-gray)",
        borderBottom: "1px solid var(--color-light-gray)",
      }}
    >
      <colgroup>
        <col style={{ width: "32px" }}></col>
        <col style={{ width: "110px" }}></col>
        <col style={{ width: "400px" }}></col>
        <col style={{ width: "100px" }}></col>
        <col style={{ width: "75px" }}></col>
        <col style={{ width: "98px" }}></col>
        <col style={{ width: "98px" }}></col>
        <col style={{ width: "85px" }}></col>
        <col style={{ width: "98px" }}></col>
        <col style={{ width: "110px" }}></col>
      </colgroup>
      <thead style={{ fontSize: "0.9rem", color: "" }}>
        <tr>
          <th scope="col">
            <input type="checkbox" style={{ zoom: 1.4 }}></input>
          </th>
          <th scope="col" style={{ padding: "15px" }}>
            이미지
          </th>
          <th scope="col">상품정보</th>
          <th scope="col">판매가</th>
          <th scope="col">수량</th>
          <th scope="col">적립금</th>
          <th scope="col">배송구분</th>
          <th scope="col">배송비</th>
          <th scope="col">합계</th>
          <th scope="col">선택</th>
        </tr>
      </thead>
    </div>
  );
};

export default CartHeadTable;
