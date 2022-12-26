import React from "react";
import styled from "styled-components";
import { fadeInFromBottomAnimation } from "../../../styles/animations";

const ItemScreen = ({ mediumThumbnailImgUrl, name, price, caption }) => {
  return (
    <Container>
      <img src={mediumThumbnailImgUrl} alt={name}></img>
      <div>{name}</div>
      <h6>{caption}</h6>
      <h5>{price}원</h5>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  margin: 3.5rem 1rem 0 1rem;
  z-index: -1;
  img {
    width: 100%;
    ${fadeInFromBottomAnimation}
  }
  div {
    text-align: center;
    margin-top: 0.5rem;
    padding: 0.5rem 0;
    font-weight: 800;
    border-top: 1px solid var(--color-black);
    border-bottom: 1px solid var(--color-black);
  }
  h6 {
    text-align: center;
    width: 100%;
    margin-top: 0.6rem;
    margin-bottom: 0.3rem;
    background-color: none;
    font-weight: 200;
  }
  h5 {
    text-align: center;
    margin-top: 0;
    color: var(--color-black);
    font-weight: 800;
  }
`;

export default ItemScreen;
