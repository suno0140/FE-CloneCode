import React from "react";
import useScrollPosition from "../../../hooks/useScrollPosition";
import { useNavigate } from "react-router-dom";
import LinkButton from "./LinkButton";
import styled from "styled-components";
import { justFadeInAnimation } from "../../../styles/animations";
import { useSelector } from "react-redux";

const HeaderSecond = () => {
  const scrollPosition = useScrollPosition();
  const navigate = useNavigate();
  const categories = useSelector((state) => state.header.category);
  const cartItemCount = useSelector((state) => state.header.cartItemCount);

  return (
    <HeaderContainerSecond>
      {scrollPosition > 36 && (
        <img
          src="http://iiinjeju.com/_dj/img/logo.jpg"
          alt="iiin 로고"
          onClick={() => {
            navigate("/");
          }}
        />
      )}
      {categories.map((category) => {
        return (
          <LinkButton
            key={category}
            linkName={category}
            fontsize={scrollPosition <= 36 ? "1rem" : "0.8rem"}
            margin={scrollPosition <= 36 ? "1rem 4rem" : "0.4rem 1.5rem"}
            linkTo={`/product/list?category=${category.toLowerCase()}&page=1`}
            isHoverNeed={true}
          />
        );
      })}
      <IconContainer>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/imgs/cart.svg"}
            alt="cart"
            onClick={() => {
              navigate("/cart");
            }}
          />
          <div
            onClick={() => {
              navigate("/cart");
            }}
          >
            {cartItemCount}
          </div>
        </div>
      </IconContainer>
    </HeaderContainerSecond>
  );
};

const HeaderContainerSecond = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--color-black);
  padding: 0 1.5rem;
  min-width: 800px;
  max-width: 1200px;
  background: white;
  img {
    width: 2rem;
    position: absolute;
    left: 5rem;
    ${justFadeInAnimation}
    cursor: pointer;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  right: 8rem;
  div {
    div {
      position: absolute;
      top: -0.2rem;
      left: 5.8rem;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background: var(--color-black);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.1rem;
      cursor: pointer;
    }
  }
  img {
    width: 1.1rem;
    position: relative;
    &:nth-child(1) {
      margin-right: 1.8rem;
    }
    &:nth-child(2) {
      margin-bottom: 0.4rem;
    }
  }
`;

export default React.memo(HeaderSecond);
