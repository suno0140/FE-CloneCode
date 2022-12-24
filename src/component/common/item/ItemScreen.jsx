import React from "react";
import styled from "styled-components";

const ItemScreen = () => {
  return (
    <Container>
      <img
        src="http://iiinjeju.com/web/product/medium/202209/2298aa037d5acc9195621d6a163a2f54.jpg"
        alt="잡지"
      ></img>
      <div>매거진&lt;인iiin&gt; vol.35 기쁜 우리 잔칫날</div>
      <h6>섬에서 혼례는 집안의 경사이자 몇 날 며칠씩 여는 마을 축제였다.</h6>
      <h5>6,900원</h5>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 12rem;
  margin: 0 0.6rem;
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

export default ItemScreen;
