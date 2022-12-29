import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";
import { useNavigate } from "react-router-dom";
import numeral from "numeral";

const ItemScreen = ({ thumbnailImgUrl, name, price, caption, linkTo }) => {
  const animationItem = useScrollFadeIn();
  const navigate = useNavigate();
  return (
    <Container
      ref={animationItem.ref}
      style={animationItem.style}
      onClick={() => {
        navigate(linkTo);
      }}
    >
      <img src={thumbnailImgUrl} alt={name}></img>
      <div>{name}</div>
      <h6>{caption}</h6>
      <h5>{numeral(price).format("0,0")}원</h5>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 14rem;
  height: 20rem;
  margin: 3.5rem 1rem 0 1rem;
  cursor: pointer;
  img {
    width: 100%;
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

export default React.memo(ItemScreen);
