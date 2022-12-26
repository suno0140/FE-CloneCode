import React from "react";

const CartFootTable = () => {
  return (
    <div style={{ borderBottom: "1px solid #e1e1e1" }}>
      <tfoot style={{ fontSize: "1.2rem" }}>
        <tr>
          <td colspan="10" style={{ padding: "20px 0 20px 0" }}>
            <span style={{ justifyContent: "flex-start" }}>[기본배송]</span>
            <span style={{ marginLeft: "600px" }}>
              상품구매금액 <span style={{ fontWeight: "bold" }}>290,000</span> +
              배송비 0 (무료) = 합계 :
              <span style={{ fontWeight: "bold" }}> 290,000원</span>
            </span>
          </td>
        </tr>
      </tfoot>
    </div>
  );
};

export default CartFootTable;
