import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { __getOrderList } from "../../../../redux/modules/orderListSlice";

const OrderProductListTable = () => {
  const dispatch = useDispatch();
  const orderList = useSelector((state) => state.orderList.orderList);

  useEffect(() => {
    dispatch(__getOrderList());
  }, [dispatch]);

  console.log(orderList);
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th width="80rem">이미지</th>
            <th width="200rem">상품 정보</th>
            <th width="80rem">수량</th>
            <th width="80rem">상품구매금액</th>
            <th width="80rem">합계</th>
          </tr>
        </thead>
        <tbody>
          {orderList === [] ? (
            orderList.map((order) => (
              <tr>
                <th width="80rem">
                  <img src={order.thumbnailImgUrl} alt={order.name} />
                </th>
                <th width="200rem">{order.name}</th>
                <th width="20rem">{order.quantity}</th>
                <th width="20rem">{order.sellingPrice}</th>
                <th width="20rem">{order.summation}</th>
              </tr>
            ))
          ) : (
            <tr>
              <th colSpan="5"> 구매내역이 없습니다</th>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

const Table = styled.table`
  width: 100%;
  thead {
    tr {
      th {
        font-weight: 400;
        text-align: center;
        margin: 0;
        width: ${({ width }) => width};
        padding: 15px 0;
        border-top: 1px solid var(--color-light-gray);
        border-bottom: 1px solid var(--color-light-gray);
      }
    }
  }
  tbody {
    tr {
      th {
        font-weight: 800;
        text-align: center;
        width: ${({ width }) => width};
        padding: 15px 0;
        border-top: 1px solid var(--color-light-gray);
        border-bottom: 1px solid var(--color-light-gray);
      }
    }
  }
`;

export default OrderProductListTable;
