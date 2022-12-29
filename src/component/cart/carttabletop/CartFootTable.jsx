import React from "react";
import { useSelector } from "react-redux";
import numeral from "numeral";

const CartFootTable = () => {
  const { cart } = useSelector((state) => state.cart);
  const sumall = cart
    .map((item) => item.summation)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <div
      style={{
        borderTop: "1px solid var(--color-light-gray)",
        borderBottom: "1px solid var(--color-light-gray)",
        marginBottom: "10px",
      }}
    >
      <tfoot style={{ fontSize: "1.2rem" }}>
        <tr>
          <td colspan="10" style={{ padding: "20px 0 20px 0" }}>
            <span style={{ justifyContent: "flex-start" }}>[기본배송]</span>
            <span style={{ marginLeft: "500px" }}>
              상품구매금액{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                {numeral(sumall).format("0,0")}
              </span>{" "}
              + 배송비 0 (무료) = 합계 :
              <span style={{ fontWeight: "bold" }}>
                {numeral(sumall).format("0,0")}
              </span>
            </span>
          </td>
        </tr>
      </tfoot>
    </div>
  );
};

export default CartFootTable;
