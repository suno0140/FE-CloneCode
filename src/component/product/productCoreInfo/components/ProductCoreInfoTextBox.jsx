import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ProductCoreInfoTextBox = () => {
  const { product } = useSelector((state) => state.product);
  const onClickCart = () => {};

  return (
    <Container>
      <h3>{product.name}</h3>
      <div>
        <h5>판매가</h5>
        <h2>{product.price}</h2>
      </div>
      <CountLineContainer>
        <h5>{product.name}</h5>
        <CountContainer>
          <input type="text" value="1"></input>
          <div>
            <div>▲</div>
            <div>▼</div>
          </div>
        </CountContainer>
        <h6>{product.price}</h6>
      </CountLineContainer>
      <TotalContainer>
        <h5>TOTAL</h5>
        <h3>{product.price}</h3>
      </TotalContainer>
      <button
        onClick={() => {
          onClickCart();
        }}
      >
        장바구니
      </button>
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
  button {
    width: 100%;
    background-color: var(--color-black);
    font-size: 1rem;
    color: white;
    font-weight: 700;
    padding: 0.7rem;
    letter-spacing: 3px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
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

export default ProductCoreInfoTextBox;
