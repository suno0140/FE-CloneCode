import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { baseURLApiV1 } from "../../../../core/api";
import { __postOrderList } from "../../../../redux/modules/orderListSlice";
import { useNavigate } from "react-router-dom";
import numeral from "numeral";

const ProductCoreInfoTextBox = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.product);

  const productId = product.productId;
  const [count, setCount] = useState(1);

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

  const onClickCart = async () => {
    try {
      const quantity = count;
      const cart = { productId, quantity };
      const data = await baseURLApiV1.post("/cart", cart);
      if (data.data.statusCode === 201) {
        return data;
      } else {
        alert(data.data.msg);
        navigate("/cart");
      }
    } catch (error) {
      console.log(error);
      alert("로그인이 필요합니다.");
    }
  };

  const successOrder = () => {
    alert("구매가 완료되었습니다");
    navigate("/orderlist");
  };

  const orderHandler = () => {
    dispatch(
      __postOrderList({
        productList: [{ productId: product?.productId, quantity: count }],
        inCart: false,
      })
    ).then((res) => {
      res?.error?.message && res?.error?.message === "Rejected"
        ? alert("로그인이 필요합니다")
        : successOrder();
    });
  };

  return (
    <Container>
      <ProductTitle>{product.name}</ProductTitle>
      <ProductSecondTitle>
        <h4>판매가</h4>
        <h2>{numeral(product.price).format("0,0")}원</h2>
      </ProductSecondTitle>
      <CountLineContainer>
        <CarH5>{product.name}</CarH5>
        <CountContainer>
          <CarPtag> {count} </CarPtag>
          <div>
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
          </div>
        </CountContainer>
        <h4>{numeral(product.price * count).format("0,0")}원</h4>
      </CountLineContainer>
      <TotalContainer>
        <h5>TOTAL :</h5>
        <h2>{numeral(product.price * count).format("0,0")}원</h2>
        <p>({count}개)</p>
      </TotalContainer>
      <CartButtonContainer>
        <CartButton
          onClick={() => {
            onClickCart();
          }}
          backgroundColor="white"
          color="var(--color-black)"
          border="1px solid #C5C5C5"
        >
          장바구니
        </CartButton>
        <CartButton
          onClick={() => {
            orderHandler();
          }}
        >
          구매하기
        </CartButton>
      </CartButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 19rem;
  border-top: 1px solid var(--color-black);
  margin: 0 3.5rem;
  h3 {
    margin: 2.5rem 0 8rem;
    font-weight: 600;
    font-size: 0.9rem;
  }
  div {
    display: flex;
    align-items: center;
    h5 {
      font-weight: 400;
      font-size: 0.2rem;
    }
    h2 {
      margin-left: 2rem;
    }
    h3 {
      font-weight: 900;
      font-size: 0.9rem;
    }
    h6 {
      font-weight: 900;
      font-size: 0.1rem;
    }
  }
`;

const CartButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CartButton = styled.button`
  width: 100%;
  margin-left: 0.5rem;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "var(--color-black)"};
  /* background-color: var(--color-black); */
  font-size: 1rem;
  color: ${({ color }) => color || "white"};
  /* color: white; */
  font-weight: 700;
  padding: 0.7rem;
  letter-spacing: 3px;
  border: ${({ border }) => border || "none"};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const ProductTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  padding: 30px 0;
`;

const ProductSecondTitle = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
  padding: 3px 0;
  border-bottom: 1px solid var(--color-gray);
`;

const CountLineContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CountContainer = styled.div`
  display: flex;
  input {
    width: 0.3rem;
    height: 0.8rem;
    padding: 0.3rem;
    font-size: 0.1rem;
    border: 1px solid var(--color-light-gray);
  }
  div {
    display: flex;
    flex-direction: column;
    div {
      width: 1rem;
      height: 0.6rem;
      padding: 0;
      font-size: 0.1rem;
      border: 1px solid var(--color-light-gray);
      color: var(--color-gray);
    }
  }
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 2rem;
  margin-bottom: 1rem;
  h3 {
    margin: 0 0 0 0.5rem;
    font-size: 0.1rem;
    font-weight: 800;
  }
`;

const Upbutton = styled.button`
  width: 15px;
  height: 11px;
  background-image: url("http://img.echosting.cafe24.com/skin/base_ko_KR/product/btn_count_up.gif");
  background-position: 17px;
  border: 1px solid var(--color-gray);
`;

const Downbutton = styled.button`
  background-position: 17px;
  width: 15px;
  height: 11px;
  background-image: url("http://img.echosting.cafe24.com/skin/base_ko_KR/product/btn_count_down.gif");
  border: 1px solid var(--color-gray);
`;

const CarPtag = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 15px;
  height: 20px;
  border: 1px solid var(--color-gray);
`;

const CarH5 = styled.h5`
  width: 200px;
`;

export default ProductCoreInfoTextBox;
